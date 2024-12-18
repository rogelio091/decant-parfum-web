import {
  Component,
  computed,
  EventEmitter,
  inject,
  Input,
  model,
  OnChanges,
  OnInit,
  Output,
  signal,
  SimpleChanges
} from '@angular/core';
import { FilterFields } from './filter.type';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-dinamic-filter',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  templateUrl: './dinamic-filter.component.html'
})
export class DinamicFilterComponent implements OnInit, OnChanges {
  @Input({ required: true }) data: FilterFields[];
  @Output() filter = new EventEmitter<string>();
  readonly searchMatchAll = model(false);

  selectField: FormControl = new FormControl('');
  valueField: FormControl = new FormControl('');

  filters = signal([]);
  filtersWithKeyValue = computed(() => {
    return this.filters().map((filter) => {
      const tst = Object.entries(filter).map(([key, value]) => ({ key, value }));
      return tst[0];
    });
  });

  filterUrl = '';

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('data', this.data);
    if (changes.data.currentValue) {
      console.log('data', this.data);
    }
  }

  addFilterFields() {
    console.log({ [this.selectField.value]: this.valueField.value });
    this.filters.update((filter) => [
      ...filter,
      { [this.selectField.value]: this.valueField.value }
    ]);
    this.generateString();
  }

  generateString() {
    this.filterUrl = '';
    this.filtersWithKeyValue().forEach((filter, index) => {
      var operator = '';
      if (index > 0 && index < this.filtersWithKeyValue().length) {
        operator = '&&';
      }
      this.filterUrl = this.filterUrl + `${operator}${filter.key}@=${filter.value}`;
    });
    console.log(this.filterUrl);
  }

  emitFilters() {
    console.log(encodeURIComponent(this.filterUrl));
    this.filter.emit(encodeURIComponent(this.filterUrl));
  }
}
