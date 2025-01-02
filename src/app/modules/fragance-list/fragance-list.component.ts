import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import { ItemsGridComponent } from 'app/components/items-grid/items-grid.component';
import { UserListResponse } from 'app/core/models-api/Identity';
import { Gender, Item } from 'app/core/models/item.type';
import { items_catalogue } from 'app/core/objects/items';
import { filter } from 'rxjs';
import { FraganceDialogComponent } from './fragance-dialog/fragance-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-fragance-list',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    ItemsGridComponent
  ],
  templateUrl: './fragance-list.component.html',
  styleUrl: './fragance-list.component.scss'
})
export class FraganceListComponent implements OnInit {
  private _matDialog = inject(MatDialog);
  private _destroyRef = inject(DestroyRef);
  items: Item[];
  allItems = items_catalogue;
  genders = Object.entries(Gender).map(([key, value]) => ({ key, value }));

  ngOnInit(): void {
    this.items = items_catalogue;
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
      .subscribe((data: UserListResponse) => {});
  }

  filterByGender(event) {
    console.log(event);
    if (event.value === 'all') return (this.items = items_catalogue);
    this.items = items_catalogue.filter((item) => item.gender === event.value);
  }

  filterByQuery(event) {
    const trimedEvent = event.trim();
    if (trimedEvent === '') return (this.items = items_catalogue);
    this.items = items_catalogue.filter(
      (item) =>
        item.name.toLowerCase().includes(trimedEvent.toLowerCase()) ||
        item.house.toLowerCase().includes(trimedEvent.toLowerCase())
    );
  }

  trackByFn(index: number, item: any): any {
    return item.id || index;
  }
}
