import { Component, inject, OnInit, signal } from '@angular/core';
import { items_catalogue } from 'app/core/objects/items';
import { CatalogService } from 'app/core/services/catalog.service';
import { calculateIsFullBottle, calculateItemStatus, Item } from 'app/core/models/item.type';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { FraganceDialogComponent } from './fragance-dialog/fragance-dialog.component';

@Component({
  selector: 'app-fragance-list',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './fragance-list.component.html'
})
export class FraganceListComponent implements OnInit {
  private _catalogService = inject(CatalogService);
  private _fragancesInKv: Item[];
  private _matDialog = inject(MatDialog);
  fragances = signal<Item[]>(items_catalogue);

  ngOnInit(): void {
    this._catalogService.getPerfumes().subscribe((perfumes) => {
      console.log(perfumes);
      this._fragancesInKv = perfumes;
    });
    this.fragances.update((items) => {
      items.forEach((item) => {
        item.status = calculateItemStatus(item.options);
        item.options = item.options.map((option) => {
          option.isFullBottle = calculateIsFullBottle(item.options);
          return option;
        });
        return item;
      });
      return items;
    });
  }

  openPerfumeDialog(item?: Item) {
    var exists = this.existsInKv(item);
    this._matDialog.open(FraganceDialogComponent, {
      data: {
        title: exists ? 'Actualizar Fragancia' : 'Nueva Fragancia',
        icon: {
          show: true,
          name: item ? 'heroicons_outline:user' : 'heroicons_outline:user-plus',
          color: 'basic'
        },
        item: { fragance: item, exists: exists },
        actions: {
          confirm: { label: exists ? 'Actualizar' : 'Agregar' }
        }
      },
      panelClass: 'fuse-confirmation-dialog-panel',
      disableClose: true
    });
    console.log(item);
  }

  addPerfumeToKv(item: Item) {
    this._catalogService.addPerfume(item).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  existsInKv(item: Item): boolean {
    if (!this._fragancesInKv) return false;
    return this._fragancesInKv.some((fragance) => fragance.id === item.id);
  }

  addAllToKv() {
    this.fragances().forEach((item) => {
      this.addPerfumeToKv(item);
    });
  }

  newFragance() {
    this.openPerfumeDialog();
  }
}
