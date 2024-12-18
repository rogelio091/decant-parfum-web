import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { PageEvent } from '@angular/material/paginator';
import { Router, ActivatedRoute } from '@angular/router';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { DinamicFilterComponent } from 'app/components/dinamic-filter/dinamic-filter.component';
import { FilterFields } from 'app/components/dinamic-filter/filter.type';
import { DinamicTableComponent } from 'app/components/dinamic-table/dinamic-table.component';
import { TableColumn, TableMenus, ActionReturn } from 'app/components/dinamic-table/table.type';
import { PageLayoutComponent } from 'app/components/page-layout/page-layout.component';
import { ToastService } from 'app/components/toast-alert/toast.service';
import { Permission, PermissionActions } from 'app/core/api/configs';
import { GymReponse } from 'app/core/models-api/Gym';
import { PaginatedResponse } from 'app/core/models-api/PaginatedResponse';
import { GymService } from 'app/core/services/gym.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-gyms',
  standalone: true,
  imports: [
    PageLayoutComponent,
    MatButtonModule,
    MatIconModule,
    DinamicTableComponent,
    DinamicFilterComponent
  ],
  templateUrl: './gyms.component.html',
  styleUrl: './gyms.component.scss'
})
export class GymsComponent {
  private _gymService = inject(GymService);
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

  gymList = signal<PaginatedResponse<GymReponse>>(null);
  tableColumns: TableColumn<GymReponse>[] = [
    {
      label: 'NOMBRE',
      property: 'name',
      type: 'text'
    },
    {
      label: 'DIRECCIÓN',
      property: 'address',
      type: 'text'
    },
    {
      label: 'TELÉFONO',
      property: 'phoneNumber',
      type: 'text'
    },
    {
      label: 'ACCIONES',
      property: 'id',
      type: 'menu',
      menu: TableMenus.Roles
    }
  ];

  filters: string = null;

  filterFields: FilterFields[] = [
    {
      name: 'Nombre',
      property: 'name',
      type: 'text'
    },
    {
      name: 'Dirección',
      property: 'address',
      type: 'text'
    },
    {
      name: 'Teléfono',
      property: 'phoneNumber',
      type: 'text'
    }
  ];

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles() {
    this._gymService
      .getGyms({ PageNumber: this._page, PageSize: this._pageSize }, this.filters)
      .subscribe({
        next: (response) => {
          this.gymList.set(response);
        }
      });
  }

  actionTable(event: ActionReturn) {
    console.log(event);
    const rolEdit = event.item
      ? this.gymList().items.find((rol) => rol.id === event.item)
      : undefined;
    // if (event.action === PermissionActions.Update) this.openRolDialog(rolEdit);
    // if (event.action === PermissionActions.Delete) this.deleteRolDialog(rolEdit);
    // if (event.action === PermissionActions.Read) this.rediretToPermissions(rolEdit.id);
  }

  pagesAction(event: PageEvent) {
    console.log(event);
    this._page = event.pageIndex + 1;
    this._pageSize = event.pageSize;
    this.getRoles();
  }

  setFilters(filters: string) {
    this.filters = filters;
    this.getRoles();
  }

  // openRolDialog(item?: RoleResponse) {
  //   this._matDialog
  //     .open(RolDialogComponent, {
  //       data: {
  //         title: item ? 'Actualizar Rol' : 'Nuevo Rol',
  //         icon: {
  //           show: true,
  //           name: item ? 'heroicons_outline:identification' : 'heroicons_outline:plus',
  //           color: 'basic'
  //         },
  //         item: item ?? undefined,
  //         actions: {
  //           confirm: { label: item ? 'Actualizar' : 'Agregar' }
  //         }
  //       },
  //       panelClass: 'fuse-confirmation-dialog-panel',
  //       disableClose: true
  //     })
  //     .afterClosed()
  //     .pipe(
  //       filter((state) => state !== undefined),
  //       takeUntilDestroyed(this._destroyRef)
  //     )
  //     .subscribe((data: RoleResponse) => {
  //       if (data) {
  //         this.roleList.update((roles) => {
  //           const items = roles.items.map((rl) => (rl.id === data.id ? data : rl));

  //           if (!roles.items.some((rl) => rl.id === data.id)) {
  //             items.push(data);
  //           }

  //           return { ...roles, items };
  //         });

  //         this._toastService.showSuccessToast(
  //           item ? 'Se ha actualizado con éxito' : 'Se ha creado con éxito'
  //         );
  //       }
  //     });
  // }

  deleteRolDialog(gym: GymReponse) {
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
        // this.callToDelete(gym);
      });
  }

  //   private callToDelete(gym: GymReponse) {
  //     this._gymService.deleteRol(gym).subscribe({
  //       next: () => {
  //         this.roleList.update((roles) => {
  //           const items = roles.items.filter((rl) => rl.id !== gym.id);
  //           return { ...roles, items };
  //         });
  //         this._toastService.showSuccessToast('Se ha eliminado con éxito');
  //       },
  //       error: (err) => {}
  //     });
  //   }
  // }
}
