import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  Component,
  Input,
  input,
  OnChanges,
  signal,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { FuseCardComponent } from '@fuse/components/card';
import { EmptyDataComponent } from '../empty-data/empty-data.component';
import { Item } from 'app/core/models/item.type';
import { popoverAnimation } from 'app/animations/popover.animation';
import { fadeInRight400ms } from 'app/animations/fade-in-right.animation';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-items-grid',
  standalone: true,
  imports: [
    CommonModule,
    MatTooltipModule,
    MatButtonModule,
    FuseCardComponent,
    RouterLink,
    MatPaginatorModule,
    MatIcon,
    MatIconModule,
    NgOptimizedImage,
    EmptyDataComponent
  ],
  templateUrl: './items-grid.component.html',
  styleUrl: './items-grid.component.scss',
  animations: [popoverAnimation, fadeInRight400ms]
})
export class ItemsGridComponent implements OnChanges {
  @Input({ required: true }) items: Item[] = [];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  itemList = signal<Item[]>([]);
  itemList$: Observable<Item[]>;
  isMobile = signal<boolean>(window.innerWidth < 960);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.items) {
      this.itemList.set(changes.items.currentValue);
      const dataSource = new MatTableDataSource(this.itemList());
      dataSource.paginator = this.paginator;
      this.itemList$ = dataSource.connect();
    }
  }
}
