import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  input,
  OnChanges,
  Output,
  signal,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { FuseCardComponent } from '@fuse/components/card';
import { EmptyDataComponent } from '../empty-data/empty-data.component';
import { Item, ItemStatus } from 'app/core/models/item.type';
import { popoverAnimation } from 'app/animations/popover.animation';
import { fadeInRight400ms } from 'app/animations/fade-in-right.animation';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { getSpanishPaginatorIntl } from 'app/core/helpers/spanishPaginator';

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
  animations: [popoverAnimation, fadeInRight400ms],
  providers: [{ provide: MatPaginatorIntl, useValue: getSpanishPaginatorIntl() }]
})
export class ItemsGridComponent implements OnChanges {
  @Input({ required: true }) items: Item[] = [];
  @Output() itemClick = new EventEmitter<Item>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  itemList = signal<Item[]>([]);
  itemList$: Observable<Item[]>;
  isMobile = signal<boolean>(window.innerWidth < 960);

  itemStatus = ItemStatus;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isMobile.set(window.innerWidth < 960);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.items) {
      this.itemList.set(changes.items.currentValue);
      const dataSource = new MatTableDataSource(this.itemList());
      dataSource.paginator = this.paginator;
      this.itemList$ = dataSource.connect();
    }
  }

  itemClicked(item: Item): void {
    this.itemClick.emit(item);
  }

  scrollToTop() {
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);

        window.scrollTo(0, currentScroll - currentScroll / 8);
      }
    })();
  }

  trackByFn(index: number, item: any): any {
    return item.id || index;
  }
}
