import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { TableColumn, TableMenus, ActionReturn } from 'app/components/dinamic-table/table.type';
import { ToastService } from 'app/components/toast-alert/toast.service';
import { Permission, PermissionActions } from 'app/core/api/configs';
import { CustomerResponse } from 'app/core/models-api/Customers';
import { CustomersService } from 'app/core/services/customers.service';
import { filter } from 'rxjs';
import { CustomerDialogComponent } from './customer-dialog/customer-dialog.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DinamicTableComponent } from 'app/components/dinamic-table/dinamic-table.component';
import { PageLayoutComponent } from 'app/components/page-layout/page-layout.component';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    DinamicTableComponent,
    PageLayoutComponent
  ],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent implements OnInit {
  private _customersService = inject(CustomersService);
  private _matDialog = inject(MatDialog);
  private _destroyRef = inject(DestroyRef);
  private _toastService = inject(ToastService);
  private _fuseConfirmationService = inject(FuseConfirmationService);

  permission = Permission.Customer;
  actions = PermissionActions;

  customerList = signal<CustomerResponse[]>([]);
  tableColumns: TableColumn<CustomerResponse>[] = [
    {
      label: 'NOMBRE',
      property: 'fullName',
      type: 'text'
    },
    {
      label: 'NO. TELEFONO',
      property: 'phoneNumber',
      type: 'text'
    },
    {
      label: 'CORREO ELECTRONICO',
      property: 'email',
      type: 'text'
    },
    {
      label: 'NIT',
      property: 'nit',
      type: 'text'
    },
    {
      label: 'ACCIONES',
      property: 'id',
      type: 'menu',
      menu: TableMenus.Customers
    }
  ];

  ngOnInit(): void {
    this._customersService.getCustomers().subscribe({
      next: (response) => {
        this.customerList.set(response);
      }
    });
  }

  actionTable(event: ActionReturn) {
    console.log(event);
    const usrEdit = event.item
      ? this.customerList().find((usr) => usr.id === event.item)
      : undefined;
    if (event.action === PermissionActions.Update) this.openUserDialog(usrEdit);
    if (event.action === PermissionActions.Delete) this.deleteCustomerDialog(usrEdit);
  }

  openUserDialog(item?: CustomerResponse) {
    this._matDialog
      .open(CustomerDialogComponent, {
        data: {
          title: item ? 'Actualizar Cliente' : 'Nuevo Cliente',
          icon: {
            show: true,
            name: item ? 'heroicons_outline:user' : 'heroicons_outline:user-plus',
            color: 'basic'
          },
          item: item ?? undefined,
          actions: {
            confirm: { label: item ? 'Actualizar' : 'Agregar' }
          }
        },
        panelClass: 'fuse-confirmation-dialog-panel',
        disableClose: true
      })
      .afterClosed()
      .pipe(
        filter((state) => state !== undefined),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe((data: CustomerResponse) => {
        if (data) {
          this.customerList.update((customers) => {
            return item
              ? customers.map((customer) => {
                  if (customer.id === data.id) return data;
                  return customer;
                })
              : [...customers, data];
          });
          this._toastService.showSuccessToast(
            item ? 'Se ha actualizado con éxito' : 'Se ha creado con éxito'
          );
        }
      });
  }

  deleteCustomerDialog(customer: CustomerResponse) {
    this._fuseConfirmationService
      .open({
        title: 'Eliminar usuario',
        icon: { name: 'heroicons_outline:trash', color: 'error' },
        message: '¿Estás seguro de eliminar este registro?',
        dismissible: false,
        actions: {
          cancel: { label: 'Cancelar', show: true },
          confirm: { label: 'Eliminar' }
        }
      })
      .afterClosed()
      .pipe(
        filter((state) => state === 'confirmed'),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe((data: string) => {
        this.callToDelete(customer);
      });
  }

  private callToDelete(customer: CustomerResponse) {
    this._customersService.deleteCustomer(customer).subscribe({
      next: () => {
        this.customerList.update((customers) => {
          return customers.filter((ct) => ct.id !== customer.id);
        });
        console.log(this.customerList());
      },
      error: (err) => {}
    });
  }
}
