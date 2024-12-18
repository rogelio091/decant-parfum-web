import { CommonModule } from '@angular/common';
import { Component, inject, Inject, OnDestroy, OnInit, signal } from '@angular/core';
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
import { ToastService } from 'app/components/toast-alert/toast.service';
import { Forms } from 'app/core/forms/forms';
import { UserResponse } from 'app/core/models-api/Identity';
import { DialogData } from 'app/core/models/dialog.type';
import { IdentityService } from 'app/core/services/identity.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-user-dialog',
  standalone: true,
  imports: [
    CommonModule,
    DialogLayoutComponent,
    DinamicFormComponent,
    MatButtonModule,
    MatDialogModule,
    MatIconModule
  ],
  templateUrl: './user-dialog.component.html',
  styleUrl: './user-dialog.component.scss'
})
export class UserDialogComponent implements OnInit, OnDestroy {
  private _identityService = inject(IdentityService);
  private _fuseAlertService = inject(FuseAlertService);
  private _toastService = inject(ToastService);

  formUser$ = new BehaviorSubject<FormTemplateModel>(Forms['UserForm']);
  stateFormUser$ = new BehaviorSubject<StateForm>({
    resetForm: false,
    executeReturn: false
  });

  dismissAlert = signal<boolean>(false);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private dialogRef: MatDialogRef<UserDialogComponent>
  ) {}
  ngOnDestroy(): void {
    this._fuseAlertService.dismiss('resetPassword');
  }
  ngOnInit(): void {
    console.log(this.data);
    if (this.data.item) {
      this.setValuesToEdit(this.data.item);
    }
  }

  setValuesToEdit(userToEdit: UserResponse) {
    const newForm = { ...this.formUser$.getValue() };
    newForm.Fields = newForm.Fields.map((fld) => {
      if (fld.Code === 'id') return { ...fld, Value: userToEdit.id };
      if (fld.Code === 'fullName') return { ...fld, Value: userToEdit.fullName };
      if (fld.Code === 'userName') return { ...fld, Value: userToEdit.userName };
      if (fld.Code === 'phoneNumber') return { ...fld, Value: userToEdit.phoneNumber };
      if (fld.Code === 'email') return { ...fld, Value: userToEdit.email };
      if (fld.Code === 'password') return { ...fld, IsRequired: false };
    });
    this.formUser$.next(newForm);
  }

  executeFormValue() {
    this.stateFormUser$.next({ resetForm: false, executeReturn: true });
  }

  actionForm(values: UserResponse) {
    if (values) {
      this._fuseAlertService.dismiss('alertFields');
      this.dismissAlert.set(false);
      this._identityService.postUser(values).subscribe({
        next: (response) => {
          this.stateFormUser$.next({ resetForm: true });
          this.dialogRef.close(response);
        },
        error: (err) => {
          console.log(err);
          if (err.error.validationErrors)
            this.stateFormUser$.next({
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

  sendResetPassword() {
    this._identityService.sendResetPasswordEmail({ email: this.data.item.email }).subscribe({
      next: (response) => {
        this._toastService.showSuccessToast(
          'Se ha enviado un correo electrónico para restablecer la contraseña'
        );
        this.dialogRef.close(undefined);
      }
    });
  }
}
