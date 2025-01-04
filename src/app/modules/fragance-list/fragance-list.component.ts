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
import { MessengerService } from 'app/core/services/messenger.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

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
  items: Item[];
  allItems = items_catalogue;
  genders = Object.entries(Gender).map(([key, value]) => ({ key, value }));
  genderControl = new FormControl([]);
  queryControl = new FormControl('');

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
    var itemFilter = items_catalogue;
    if (this.genderControl.value.length > 0) {
      itemFilter = itemFilter.filter((item) =>
        this.genderControl.value.some((value) => item.gender === value)
      );
    }
    if (this.queryControl.value.trim() !== '') {
      itemFilter = itemFilter.filter(
        (item) =>
          item.name.toLowerCase().includes(this.queryControl.value.toLowerCase()) ||
          item.house.toLowerCase().includes(this.queryControl.value.toLowerCase())
      );
    }
    this.items = itemFilter;
  }

  clearQuery() {
    this.queryControl.setValue('');
    this.generalFilter();
  }

  trackByFn(index: number, item: any): any {
    return item.id || index;
  }
}
