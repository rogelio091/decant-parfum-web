import { Component, computed, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { TableColumn, TableMenus, ActionReturn } from 'app/components/dinamic-table/table.type';
import { PageLayoutComponent } from 'app/components/page-layout/page-layout.component';
import { ToastService } from 'app/components/toast-alert/toast.service';
import { Permission, PermissionActions } from 'app/core/api/configs';
import { UserListResponse, RoleResponse, UserRolRequest } from 'app/core/models-api/Identity';
import { IdentityService } from 'app/core/services/identity.service';
import { filter } from 'rxjs';
import { AssignRoleDialogComponent } from './assign-role-dialog/assign-role-dialog.component';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { CommonModule } from '@angular/common';
import { popoverAnimation } from 'app/animations/popover.animation';
import { DinamicTableComponent } from 'app/components/dinamic-table/dinamic-table.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    DinamicTableComponent,
    PageLayoutComponent,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  animations: [popoverAnimation]
})
export class UsersComponent implements OnInit {
  private _identityService = inject(IdentityService);
  private _matDialog = inject(MatDialog);
  private _destroyRef = inject(DestroyRef);
  private _toastService = inject(ToastService);
  private _fuseConfirmationService = inject(FuseConfirmationService);

  permissions = Permission;
  actions = PermissionActions;

  usersList = signal<UserListResponse[]>([]);
  // userDataList = computed(() => {
  //   return this.usersList().map((user) => {
  //     return {
  //       ...user,
  //       roleName: this.indexedRoles()[user.roleId]?.name
  //     } as UserData;
  //   });
  // });
  // roleList = signal<RoleResponse[]>([]);
  // indexedRoles = computed(() => {
  //   return this.roleList().reduce((acc, val) => {
  //     acc[val.id] = val;
  //     return acc;
  //   }, {});
  // });
  tableColumns: TableColumn<UserListResponse>[] = [
    {
      label: 'NOMBRE',
      property: 'fullName',
      type: 'text'
    },
    {
      label: 'USUARIO',
      property: 'userName',
      type: 'text'
    },
    {
      label: 'CORREO ELECTRÓNICO',
      property: 'email',
      type: 'text',
      cssClasses: ['txtWrap']
    },

    {
      label: 'ROL',
      property: 'roleName',
      type: 'text',
      cssClasses: ['txtWrap']
    },
    {
      label: 'ACCIONES',
      property: 'id',
      type: 'menu',
      menu: TableMenus.Users
    }
  ];

  ngOnInit(): void {
    this.getUsers();
    // this.getRoles();
  }

  getUsers() {
    this._identityService.getUsers().subscribe({
      next: (response) => {
        console.log(response);
        this.usersList.set(response);
      }
    });
  }

  // getRoles() {
  //   this._identityService.getRoles().subscribe({
  //     next: (response) => {
  //       this.roleList.set(response);
  //     }
  //   });
  // }

  actionTable(event: ActionReturn) {
    console.log(event);
    const usrEdit = event.item ? this.usersList().find((usr) => usr.id === event.item) : undefined;
    if (event.action === PermissionActions.Update) this.openUserDialog(usrEdit);
    if (event.action === PermissionActions.AssignRole) this.openUserRolDialog(usrEdit);
    // if (event.action === PermissionActions.AssignStore)
    //     this.openUserStoreDialog(usrEdit);
    if (event.action === PermissionActions.Delete) this.deleteUserDialog(usrEdit);
  }

  openUserDialog(item?: UserListResponse) {
    this._matDialog
      .open(UserDialogComponent, {
        data: {
          title: item ? 'Actualizar Usuario' : 'Nuevo Usuario',
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
      .subscribe((data: UserListResponse) => {
        if (data) {
          this.usersList.update((users) => {
            return item
              ? users.map((usr) => {
                  if (usr.id === data.id) return data;
                  return usr;
                })
              : [...users, data];
          });
          this._toastService.showSuccessToast(
            item ? 'Se ha actualizado con éxito' : 'Se ha creado con éxito'
          );
        }
      });
  }

  openUserRolDialog(user: UserListResponse) {
    this._matDialog
      .open(AssignRoleDialogComponent, {
        data: {
          title: `Asignar Rol - (${user.userName})`,

          icon: {
            show: true,
            name: 'heroicons_outline:identification',
            color: 'basic'
          },
          item: user,
          actions: {
            confirm: { label: 'Asignar' }
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
      .subscribe((data: UserRolRequest) => {
        console.log(data);
        this.usersList.update((users) => {
          return users.map((usr) => {
            if (usr.id === user.id) return { ...usr, roleId: data.roleId };
            else return usr;
          });
        });
        this._toastService.showSuccessToast('Asignado con éxito');
      });
  }

  // openUserStoreDialog(user: UserListResponse) {
  //     this._matDialog
  //         .open(AssignStoreDialogComponent, {
  //             data: {
  //                 title: `Asignar Sucursal - (${user.userName})`,

  //                 icon: {
  //                     show: true,
  //                     name: 'heroicons_outline:building-storefront',
  //                     color: 'basic',
  //                 },
  //                 item: user,
  //                 actions: {
  //                     confirm: { label: 'Asignar' },
  //                 },
  //             },
  //             panelClass: 'fuse-confirmation-dialog-panel',
  //             disableClose: true,
  //         })
  //         .afterClosed()
  //         .pipe(
  //             filter((state) => state !== undefined),
  //             takeUntilDestroyed(this._destroyRef)
  //         )
  //         .subscribe((data: number[]) => {
  //             console.log(data);
  //             this.usersList.update((users) => {
  //                 return users.map((usr) => {
  //                     if (usr.id === user.id)
  //                         return { ...usr, claims: { storeId: data } };
  //                     else return usr;
  //                 });
  //             });
  //             this._toastService.showSuccessToast('Asignado con éxito');
  //         });
  // }

  deleteUserDialog(user: UserListResponse) {
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
        this.callToDelete(user);
      });
  }

  private callToDelete(user: UserListResponse) {
    this._identityService.deleteUser(user).subscribe({
      next: () => {
        this.usersList.update((users) => {
          return users.filter((usr) => usr.id !== user.id);
        });
      },
      error: (err) => {}
    });
  }
}
