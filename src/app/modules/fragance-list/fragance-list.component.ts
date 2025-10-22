import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import { ItemsGridComponent } from 'app/components/items-grid/items-grid.component';
import { UserListResponse } from 'app/core/models-api/Identity';
import { Gender, Item, ItemOptions, ItemStatus } from 'app/core/models/item.type';
import { items_catalogue } from 'app/core/objects/items';
import { filter } from 'rxjs';
import { FraganceDialogComponent } from './fragance-dialog/fragance-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ShoppingCartService } from 'app/core/services/shopping-cart.service';
import { OptionDialogComponent } from './option-dialog/option-dialog.component';
import { CatalogService } from 'app/core/services/catalog.service';
import { PubliDialogComponent } from './publi-dialog/publi-dialog.component';

@Component({
  selector: 'app-fragance-list',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    ItemsGridComponent,
    ReactiveFormsModule
  ],
  templateUrl: './fragance-list.component.html',
  styleUrl: './fragance-list.component.scss'
})
export class FraganceListComponent implements OnInit {
  private _matDialog = inject(MatDialog);
  private _destroyRef = inject(DestroyRef);
  private _shoppingCartService = inject(ShoppingCartService);
  private _catalogService = inject(CatalogService);
  items = signal<Item[]>([]);
  allItems = signal<Item[]>([]);
  genders = Object.entries(Gender).map(([key, value]) => ({ key, value }));
  genderControl = new FormControl([]);
  queryControl = new FormControl('');

  ngOnInit(): void {
    // this.items.set(items_catalogue);
    this.openInfoDialog();
    this._catalogService.getPerfumes().subscribe({
      next: (perfumes) => {
        console.log(perfumes);
        this.items.set(perfumes.filter((item) => item.status === ItemStatus.Available));
        this.allItems.set(perfumes.filter((item) => item.status === ItemStatus.Available));
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  openInfoDialog() {
    const dialogShown = localStorage.getItem('infoDialogShown') === 'true';
    const timestampString = localStorage.getItem('infoDialogTimestamp');

    // 2. Calcular la fecha límite (hace 3 días)
    const threeDaysAgo = new Date();
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);

    // 3. Variable para la decisión
    let shouldShowDialog = false;

    if (dialogShown && timestampString) {
      // Si se mostró y SÍ hay un timestamp
      const storedDate = new Date(timestampString);

      // Comprobar si la fecha guardada es más antigua (o igual) que "hace 3 días"
      // 'isValid' previene errores si el timestampString está corrupto
      const isValid = !isNaN(storedDate.getTime());

      if (isValid && storedDate <= threeDaysAgo) {
        shouldShowDialog = true;
      }
    } else if (!dialogShown || !timestampString) {
      // Opcional: si nunca se ha mostrado, muéstralo la primera vez.
      shouldShowDialog = true;
    }
    if (!shouldShowDialog) return;
    this._matDialog
      .open(PubliDialogComponent, {
        data: {
          title: 'Bienvenido a Ghostly Scents',
          subtitle: 'Accede a un universo de aromas exclusivos.',
          icon: {
            show: false
          }
        },
        panelClass: 'fuse-confirmation-dialog-panel',
        disableClose: true
      })
      .afterClosed()
      .subscribe(() => {
        localStorage.setItem('infoDialogShown', 'true');
        localStorage.setItem('infoDialogTimestamp', new Date().toISOString());
      });
  }

  openFraganceDialog(item: Item) {
    this._matDialog
      .open(FraganceDialogComponent, {
        data: {
          title: item.name,
          subtitle: item.house,
          icon: {
            show: true,
            name: 'feather:tag',
            color: 'info'
          },
          item: item
        },
        panelClass: 'fuse-confirmation-dialog-panel',
        disableClose: false
      })
      .afterClosed()
      .pipe(
        filter((state) => state !== undefined),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe((data: boolean) => {
        if (data) this.addToCart(item);
      });
  }
  addToCart(item: Item) {
    this._matDialog
      .open(OptionDialogComponent, {
        data: {
          title: item.name,
          subtitle: item.house,
          icon: {
            show: true,
            name: 'mat_outline:info',
            color: 'info'
          },
          item: item
        },
        panelClass: 'fuse-confirmation-dialog-panel',
        disableClose: false
      })
      .afterClosed()
      .pipe(
        filter((state) => state !== undefined),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe((data: ItemOptions) => {
        this._shoppingCartService.addToShoppingCart({
          itemName: item.name,
          house: item.house,
          image: item.image,
          itemId: item.id,
          ...data,
          quantity: 1
        });
      });
  }

  // filterByGender(event) {
  //   console.log(event);
  //   if (event.value.length === 0) return (this.items = items_catalogue);
  //   this.items = items_catalogue.filter((item) =>
  //     event.value.some((value) => item.gender === value)
  //   );
  // }

  // filterByQuery(event) {
  //   const trimedEvent = event.trim();
  //   if (trimedEvent === '') return (this.items = items_catalogue);
  //   this.items = items_catalogue.filter(
  //     (item) =>
  //       item.name.toLowerCase().includes(trimedEvent.toLowerCase()) ||
  //       item.house.toLowerCase().includes(trimedEvent.toLowerCase())
  //   );
  // }

  generalFilter() {
    var itemFilter = this.allItems();
    if (this.genderControl.value.length > 0) {
      itemFilter = itemFilter.filter((item) =>
        this.genderControl.value.some((value) => item.gender === value)
      );
    }
    if (this.queryControl.value.trim() !== '') {
      itemFilter = itemFilter.filter((item) => {
        const concat = (item.house + ' ' + item.name).toLowerCase();
        const queryWords = this.queryControl.value.toLowerCase().split(/\s+/);
        return queryWords.every((word) => concat.includes(word));
      });
    }
    this.items.set(itemFilter);
  }

  clearQuery() {
    this.queryControl.setValue('');
    this.generalFilter();
  }

  trackByFn(index: number, item: any): any {
    return item.id || index;
  }
}
