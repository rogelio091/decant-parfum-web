import { CommonModule } from '@angular/common';
import { Component, inject, Inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FuseAlertService } from '@fuse/components/alert';
import { DialogLayoutComponent } from 'app/components/dialog-layout/dialog-layout.component';
import {
  DinamicFormComponent,
  StateForm
} from 'app/components/dinamic-form/dinamic-form.component';
import { FormTemplateModel } from 'app/components/dinamic-form/models/form-model';
import { Forms } from 'app/core/forms/forms';
import { RoleResponse } from 'app/core/models-api/Identity';
import { DialogData } from 'app/core/models/dialog.type';
import { IdentityService } from 'app/core/services/identity.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-rol-dialog',
  standalone: true,
  imports: [
    CommonModule,
    DialogLayoutComponent,
    DinamicFormComponent,
    MatButtonModule,
    MatDialogModule,
    MatIconModule
  ],
  templateUrl: './rol-dialog.component.html',
  styleUrl: './rol-dialog.component.scss'
})
export class RolDialogComponent implements OnInit {
  private _identityService = inject(IdentityService);
  private _fuseAlertService = inject(FuseAlertService);

  formRol$ = new BehaviorSubject<FormTemplateModel>(Forms['RolForm']);
  stateFormRol$ = new BehaviorSubject<StateForm>({
    resetForm: false,
    executeReturn: false
  });

  dismissAlert = signal<boolean>(false);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private dialogRef: MatDialogRef<RolDialogComponent>
  ) {}
  ngOnInit(): void {
    console.log(this.data);
    if (this.data.item) {
      this.setValuesToEdit(this.data.item);
    }
  }

  setValuesToEdit(rolToEdit: RoleResponse) {
    const newForm = { ...this.formRol$.getValue() };
    newForm.Fields = newForm.Fields.map((fld) => {
      if (fld.Code === 'id') return { ...fld, Value: rolToEdit.id };
      if (fld.Code === 'name') return { ...fld, Value: rolToEdit.name };
    });
    this.formRol$.next(newForm);
  }

  executeFormValue() {
    this.stateFormRol$.next({ resetForm: false, executeReturn: true });
  }

  actionForm(values: RoleResponse) {
    if (values) {
      this._fuseAlertService.dismiss('alertFields');
      this.dismissAlert.set(false);
      this._identityService.postRol(values).subscribe({
        next: (response) => {
          this.stateFormRol$.next({ resetForm: true });
          this.dialogRef.close(response);
        },
        error: (err) => {
          console.log(err);
          if (err.error.validationErrors)
            this.stateFormRol$.next({
              resetForm: false,
              errorsForm: err.error.validationErrors
            });
        }
      });
    } else {
      this.dismissAlert.set(true);
      this._fuseAlertService.show('alertFields');
    }
  }
}
