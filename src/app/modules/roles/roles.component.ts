import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Router, ActivatedRoute } from '@angular/router';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { TableColumn, TableMenus, ActionReturn } from 'app/components/dinamic-table/table.type';
import { PageLayoutComponent } from 'app/components/page-layout/page-layout.component';
import { ToastService } from 'app/components/toast-alert/toast.service';
import { Permission, PermissionActions } from 'app/core/api/configs';
import { RoleResponse } from 'app/core/models-api/Identity';
import { IdentityService } from 'app/core/services/identity.service';
import { filter } from 'rxjs';
import { RolDialogComponent } from './rol-dialog/rol-dialog.component';
import { DinamicTableComponent } from 'app/components/dinamic-table/dinamic-table.component';
import { PaginatedResponse } from '../../core/models-api/PaginatedResponse';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [PageLayoutComponent, MatButtonModule, MatIconModule, DinamicTableComponent],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent implements OnInit {
  private _identityService = inject(IdentityService);
  private _matDialog = inject(MatDialog);
  private _destroyRef = inject(DestroyRef);
  private _toastService = inject(ToastService);
  private _fuseConfirmationService = inject(FuseConfirmationService);
  private _router = inject(Router);
  private _route = inject(ActivatedRoute);

  private _page: number = 1;
  private _pageSize: number = 1;

  permission = Permission;
  actions = PermissionActions;

  roleList = signal<PaginatedResponse<RoleResponse>>(null);
  tableColumns: TableColumn<RoleResponse>[] = [
    {
      label: 'NOMBRE',
      property: 'name',
      type: 'text'
    },
    {
      label: 'ACCIONES',
      property: 'id',
      type: 'menu',
      menu: TableMenus.Roles
    }
  ];

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles() {
    this._identityService
      .getRolesAdmin({ PageNumber: this._page, PageSize: this._pageSize })
      .subscribe({
        next: (response) => {
          this.roleList.set(response);
        }
      });
  }

  actionTable(event: ActionReturn) {
    console.log(event);
    const rolEdit = event.item
      ? this.roleList().items.find((rol) => rol.id === event.item)
      : undefined;
    if (event.action === PermissionActions.Update) this.openRolDialog(rolEdit);
    if (event.action === PermissionActions.Delete) this.deleteRolDialog(rolEdit);
    if (event.action === PermissionActions.Read) this.rediretToPermissions(rolEdit.id);
  }

  pagesAction(event: PageEvent) {
    console.log(event);
    this._page = event.pageIndex + 1;
    this._pageSize = event.pageSize;
    this.getRoles();
  }

  openRolDialog(item?: RoleResponse) {
    this._matDialog
      .open(RolDialogComponent, {
        data: {
          title: item ? 'Actualizar Rol' : 'Nuevo Rol',
          icon: {
            show: true,
            name: item ? 'heroicons_outline:identification' : 'heroicons_outline:plus',
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
      .subscribe((data: RoleResponse) => {
        if (data) {
          this.roleList.update((roles) => {
            const items = roles.items.map((rl) => (rl.id === data.id ? data : rl));

            if (!roles.items.some((rl) => rl.id === data.id)) {
              items.push(data);
            }

            return { ...roles, items };
          });

          this._toastService.showSuccessToast(
            item ? 'Se ha actualizado con éxito' : 'Se ha creado con éxito'
          );
        }
      });
  }

  deleteRolDialog(rol: RoleResponse) {
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
        this.callToDelete(rol);
      });
  }

  private callToDelete(rol: RoleResponse) {
    this._identityService.deleteRol(rol).subscribe({
      next: () => {
        this.roleList.update((roles) => {
          const items = roles.items.filter((rl) => rl.id !== rol.id);
          return { ...roles, items };
        });
        this._toastService.showSuccessToast('Se ha eliminado con éxito');
      },
      error: (err) => {}
    });
  }

  rediretToPermissions(idPermission: string) {
    const title = this.roleList().items.find((rl) => rl.id === idPermission).name;
    console.log(title);
    this._router.navigate([`${idPermission}/permissions`], {
      relativeTo: this._route
    });
  }
}
