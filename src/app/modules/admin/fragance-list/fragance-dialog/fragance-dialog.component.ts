import { CommonModule } from '@angular/common';
import { Component, inject, Inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { DialogLayoutComponent } from 'app/components/dialog-layout/dialog-layout.component';
import {
  DinamicFormComponent,
  StateForm
} from 'app/components/dinamic-form/dinamic-form.component';
import { FormTemplateModel } from 'app/components/dinamic-form/models/form-model';
import { Forms } from 'app/core/forms/forms';
import { DialogData } from 'app/core/models/dialog.type';
import { BehaviorSubject } from 'rxjs';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { InitializeItem, Item } from 'app/core/models/item.type';
import { CatalogService } from 'app/core/services/catalog.service';

@Component({
  selector: 'app-fragance-dialog',
  standalone: true,
  imports: [
    CommonModule,
    DialogLayoutComponent,
    DinamicFormComponent,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    NgxJsonViewerModule
  ],
  templateUrl: './fragance-dialog.component.html'
})
export class FraganceDialogComponent implements OnInit {
  private _catalogService = inject(CatalogService);
  formFragance$ = new BehaviorSubject<FormTemplateModel>(Forms['ParfumForm']);
  stateFormFragance$ = new BehaviorSubject<StateForm>({
    resetForm: false,
    executeReturn: false
  });

  objecJson = signal<Item>(null);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private dialogRef: MatDialogRef<FraganceDialogComponent>
  ) {}

  ngOnInit() {
    if (!this.data.item?.fragance) this.objecJson.set(InitializeItem());
    else this.objecJson.set(this.data.item.fragance as Item);
  }

  actionForm(values) {}

  executeFormValue() {
    if (this.data.item.exists) this.updatePerfumeToKv(this.objecJson());
    else this.addPerfumeToKv(this.objecJson());
  }

  updatePerfumeToKv(item: Item) {
    this._catalogService.updatePerfume(this.objecJson()).subscribe({
      next: (item) => {
        console.log(item);
        this.dialogRef.close();
      },
      error: (error) => {
        console.error(error);
      }
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
}
