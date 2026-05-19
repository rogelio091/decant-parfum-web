import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { ItemsGridComponent } from 'app/components/items-grid/items-grid.component';
import { ToastService } from 'app/components/toast-alert/toast.service';
import { Gender, Item, ItemStatus, SizeOptions } from 'app/core/models/item.type';
import { ItemsCart } from 'app/core/objects/cart';
import { CatalogService } from 'app/core/services/catalog.service';
import { ShoppingCartService } from 'app/core/services/shopping-cart.service';
import { environment } from 'environments/environment';
import {
  SetPreviewDialogComponent,
  SetPreviewData
} from './set-preview-dialog.component';

type SetSelectionItem = {
  itemId: number;
  house: string;
  itemName: string;
  image: string;
  basePrice: number;
};

function calculateSetPrice(selections: SetSelectionItem[]): number {
  if (selections.length !== 5) return 0;
  const rawTotal = selections.reduce((sum, sel) => sum + sel.basePrice, 0);
  const withFee = rawTotal + 10;
  return Math.ceil(withFee / 5) * 5;
}

@Component({
  selector: 'app-set-builder',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
    ItemsGridComponent
  ],
  templateUrl: './set-builder.component.html',
  styleUrls: ['./set-builder.component.scss']
})
export class SetBuilderComponent implements OnInit {
  private _catalogService = inject(CatalogService);
  private _shoppingCartService = inject(ShoppingCartService);
  private _toastService = inject(ToastService);
  private _matDialog = inject(MatDialog);

  allItems = signal<Item[]>([]);
  filteredItems = signal<Item[]>([]);
  selections = signal<SetSelectionItem[]>([]);
  genders = Object.entries(Gender).map(([key, value]) => ({ key, value }));
  genderControl = new FormControl([]);
  queryControl = new FormControl('');
  imagesPath = environment.IMAGES_URL;
  maxSelections = 5;

  selectionCount = computed(() => this.selections().length);
  isComplete = computed(() => this.selections().length === this.maxSelections);
  setPrice = computed(() => calculateSetPrice(this.selections()));

  ngOnInit(): void {
    this._catalogService.getPerfumes().subscribe({
      next: (perfumes) => {
        const available = perfumes.filter(
          (item) =>
            item.status === ItemStatus.Available &&
            item.options.some((o) => o.name === SizeOptions.ML5 && o.status === ItemStatus.Available)
        );
        this.allItems.set(available);
        this.filteredItems.set(available);
      },
      error: (err) => console.error(err)
    });
  }

  getBasePrice(item: Item): number {
    const ml5 = item.options.find((o) => o.name === SizeOptions.ML5);
    return ml5 ? ml5.price / 5 : 0;
  }

  toggleSelection(item: Item): void {
    const current = this.selections();
    const existingIndex = current.findIndex((s) => s.itemId === item.id);

    if (existingIndex !== -1) {
      this.selections.update((s) => s.filter((_, i) => i !== existingIndex));
      this._toastService.showSuccessToast(`${item.name} removido del set`);
      return;
    }

    if (current.length >= this.maxSelections) {
      this._toastService.showErrorToast('El set ya tiene 5 fragancias. Remueve una antes de agregar otra.');
      return;
    }

    const basePrice = this.getBasePrice(item);
    const newSelection: SetSelectionItem = {
      itemId: item.id!,
      house: item.house,
      itemName: item.name,
      image: item.image,
      basePrice
    };

    this.selections.update((s) => [...s, newSelection]);
    this._toastService.showSuccessToast(`${item.name} agregado al set`);
  }

  removeSelection(index: number): void {
    const removed = this.selections()[index];
    this.selections.update((s) => s.filter((_, i) => i !== index));
    if (removed) {
      this._toastService.showSuccessToast(`${removed.itemName} removido del set`);
    }
  }

  addSetToCart(): void {
    if (!this.isComplete()) return;

    const selections = this.selections();
    const totalPrice = this.setPrice();

    const setItem: ItemsCart = {
      image: 'decants1ml.png',
      house: 'Ghostly Scents',
      itemName: 'Set de 5 Decants (1ml)',
      itemId: Date.now() * -1,
      name: SizeOptions.ML1,
      price: totalPrice,
      quantity: 1,
      isFullBottle: false,
      status: ItemStatus.Available,
      setFragrances: selections.map((s) => ({ house: s.house, name: s.itemName }))
    };

    this._shoppingCartService.addToShoppingCart(setItem);
    this.selections.set([]);
  }

  /** Abre el dialogo de detalle del set (usado en movil) */
  openSetPreview(): void {
    const data: SetPreviewData = {
      getSelections: () => this.selections(),
      getTotalPrice: () => this.setPrice(),
      getIsComplete: () => this.isComplete(),
      onRemove: (index: number) => {
        this.removeSelection(index);
      }
    };

    this._matDialog
      .open(SetPreviewDialogComponent, {
        data,
        panelClass: 'fuse-confirmation-dialog-panel',
        maxWidth: '100vw',
        width: '90vw',
        disableClose: false
      })
      .afterClosed()
      .subscribe((result) => {
        if (!result) return;
        if (result.action === 'addToCart') {
          this.addSetToCart();
        }
      });
  }

  generalFilter(): void {
    let filtered = this.allItems();
    const genders = this.genderControl.value;

    if (genders.length > 0) {
      filtered = filtered.filter((item) =>
        genders.some((g: string) => item.gender === g)
      );
    }

    const query = this.queryControl.value.trim();
    if (query !== '') {
      const words = query.toLowerCase().split(/\s+/);
      filtered = filtered.filter((item) => {
        const concat = `${item.house} ${item.name}`.toLowerCase();
        return words.every((w: string) => concat.includes(w));
      });
    }

    this.filteredItems.set(filtered);
  }

  clearQuery(): void {
    this.queryControl.setValue('');
    this.generalFilter();
  }

  trackByFn(index: number, item: any): any {
    return item.id || index;
  }
}
