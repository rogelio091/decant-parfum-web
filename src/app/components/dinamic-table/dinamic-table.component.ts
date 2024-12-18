import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
  inject,
  input,
  signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {
  MatPaginator,
  MatPaginatorIntl,
  MatPaginatorModule,
  PageEvent
} from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { ActionReturn, TableActions, TableColumn } from './table.type';
import { getSpanishPaginatorIntl } from 'app/core/helpers/spanishPaginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { Permission, PermissionActions } from 'app/core/api/configs';
import { PermissionDirective } from 'app/directives/permission.directive';
import { SessionService } from 'app/core/services/session.service';
import { dateWithOutTimeString, dateWithTimeString } from 'app/core/helpers/dateString';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-dinamic-table',
  standalone: true,
  imports: [
    CommonModule,
    ClipboardModule,
    ScrollingModule,
    MatPaginatorModule,
    MatMenuModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    PermissionDirective
  ],
  templateUrl: './dinamic-table.component.html',
  styleUrl: './dinamic-table.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [{ provide: MatPaginatorIntl, useValue: getSpanishPaginatorIntl() }]
})
export class DinamicTableComponent<T> implements OnInit, OnChanges, AfterViewInit {
  @Input({ required: true }) data: T[];
  @Input({ required: true }) columns: TableColumn<T>[];
  @Input() footer: boolean = false;
  // @Input() filter: boolean = false;
  @Input() totalData: number;
  @Input() pageSize = 1;
  @Output() actionReturn = new EventEmitter<ActionReturn>();
  @Output() paginatorData = new EventEmitter<PageEvent>();

  private _sessionService = inject(SessionService);

  visibleColumns: Array<keyof T | string>;
  visibleColumnData: TableColumn<T>[];
  dataSource = new MatTableDataSource<T>();
  length = signal<number>(0);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.columns) {
      this.visibleColumnData = this.columns.filter((column) => column.type !== 'hidden');
      this.visibleColumns = this.visibleColumnData.map((column) => column.property);
    }

    if (changes.data.currentValue) {
      console.log(this.data);
      this.dataSource.data = this.data.sort((a, b) => (b as any).id - (a as any).id);
    }

    if (changes.totalData) {
      this.length.set(this.totalData);
    }

    if (changes.pageSize) {
      this.paginator.pageSize = this.pageSize;
    }
  }

  ngAfterViewInit() {
    if (this.totalData === undefined) {
      this.paginator.length = this.length();
      this.dataSource.paginator = this.paginator;
    }
    this.dataSource.sort = this.sort;
  }

  dateText(value) {
    return dateWithOutTimeString(value);
  }

  dateTimeText(value) {
    return dateWithTimeString(value);
  }

  stateCss(value) {
    return value === 0
      ? 'text-slate-700 bg-slate-700/10'
      : value === 1
        ? 'text-green-700 bg-green-700/10 '
        : value === 2
          ? 'text-red-700 bg-red-700/10 '
          : '';
  }

  onActionSelected(action: PermissionActions, tableAction: TableActions, item) {
    console.log(item);
    this.actionReturn.emit({
      action: action,
      tableAction: tableAction,
      item: item
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getTotalCost(prop) {
    return this.data.map((t) => t[prop]).reduce((acc, value) => acc + value, 0);
  }

  getPaginatorData(event: PageEvent) {
    if (this.totalData) this.paginatorData.emit(event);
  }

  disableOption(action: PermissionActions, item) {
    return !this._sessionService.evaluatePermission(item.permission as Permission, action);
  }
}
