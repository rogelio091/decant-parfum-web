import { Component, inject, OnInit, signal } from '@angular/core';
import { items_catalogue } from 'app/core/objects/items';
import { CatalogService } from 'app/core/services/catalog.service';
import { calculateIsFullBottle, calculateItemStatus, Item } from 'app/core/models/item.type';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-fragance-list',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './fragance-list.component.html'
})
export class FraganceListComponent implements OnInit {
  private _catalogService = inject(CatalogService);

  fragances = signal<Item[]>(items_catalogue);

  ngOnInit(): void {
    this._catalogService.getPerfumes().subscribe((perfumes) => {
      console.log(perfumes);
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

  addAllToKv() {
    this.fragances().forEach((item) => {
      this.addPerfumeToKv(item);
    });
  }
}
