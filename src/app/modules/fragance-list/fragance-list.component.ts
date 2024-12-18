import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ItemsGridComponent } from 'app/components/items-grid/items-grid.component';
import { Item } from 'app/core/models/item.type';
import { items_catalogue } from 'app/core/objects/items';

@Component({
  selector: 'app-fragance-list',
  standalone: true,
  imports: [CommonModule, ItemsGridComponent],
  templateUrl: './fragance-list.component.html',
  styleUrl: './fragance-list.component.scss'
})
export class FraganceListComponent implements OnInit {
  items: Item[];

  ngOnInit(): void {
    this.items = items_catalogue;
  }
}
