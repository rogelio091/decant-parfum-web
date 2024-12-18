import { Permission, PermissionActions } from 'app/core/api/configs';

export type TableColumn<T> = {
  label: string;
  property: string;
  footer?: string;
  type:
    | 'text'
    | 'dateText'
    | 'dateTimeText'
    | 'image'
    | 'badge'
    | 'status'
    | 'percent'
    | 'currency'
    | 'date'
    | 'progress'
    | 'checkbox'
    | 'button'
    | 'menu'
    | 'menuByStatus'
    | 'iconButton'
    | 'hidden'
    | 'clipboard'
    | 'html';
  propertyToEval?: string;
  icon?: string;
  menu?: TableMenu[];
  visible?: boolean;
  cssClasses?: string[];
  cellCssClasses?: string[];
  cssClassesHeader?: string[];
};

export type TableMenu = {
  text: string;
  action: PermissionActions;
  tableAction: TableActions;
  permission?: Permission;
  icon?: string;
  color?: string;
};

export type ActionReturn = {
  action: PermissionActions;
  tableAction: TableActions;
  item: any;
};

export enum TableActions {
  Existences,
  Edit,
  Images,
  Delete,
  Switch
}

export const TableMenus = {
  // Normal: [
  //     {
  //         text: 'Editar',
  //         action: PermissionActions.Update,
  //         icon: 'heroicons_outline:pencil-square',
  //     },
  //     {
  //         text: 'Eliminar',
  //         action: PermissionActions.Delete,
  //         icon: 'heroicons_outline:trash',
  //     },
  // ] as TableMenu[],

  Customers: [
    {
      text: 'Editar',
      action: PermissionActions.Update,
      permission: Permission.Customer,
      icon: 'heroicons_outline:pencil-square'
    },
    {
      text: 'Eliminar',
      action: PermissionActions.Delete,
      permission: Permission.Customer,
      icon: 'heroicons_outline:trash'
    }
  ] as TableMenu[],

  Users: [
    {
      text: 'Editar',
      action: PermissionActions.Update,
      permission: Permission.User,
      icon: 'heroicons_outline:pencil-square'
    },
    {
      text: 'Asignar Rol',
      action: PermissionActions.AssignRole,
      permission: Permission.User,
      icon: 'heroicons_outline:identification'
    },
    {
      text: 'Asignar Sucursal',
      action: PermissionActions.AssignStore,
      permission: Permission.User,
      icon: 'heroicons_outline:building-storefront'
    },
    {
      text: 'Eliminar',
      action: PermissionActions.Delete,
      permission: Permission.User,
      icon: 'heroicons_outline:trash'
    }
  ] as TableMenu[],
  Roles: [
    {
      text: 'Editar',
      action: PermissionActions.Update,
      permission: Permission.Role,
      icon: 'heroicons_outline:pencil-square'
    },
    {
      text: 'Permisos',
      action: PermissionActions.Read,
      permission: Permission.RolePermission,
      icon: 'heroicons_outline:lock-closed'
    },
    {
      text: 'Eliminar',
      action: PermissionActions.Delete,
      permission: Permission.Role,
      icon: 'heroicons_outline:trash'
    }
  ] as TableMenu[],
  Gyms: [
    {
      text: 'Editar',
      action: PermissionActions.Update,
      permission: Permission.Gym,
      icon: 'heroicons_outline:pencil-square'
    },
    {
      text: 'Eliminar',
      action: PermissionActions.Delete,
      permission: Permission.Gym,
      icon: 'heroicons_outline:trash'
    }
  ] as TableMenu[],
  Products: [
    // {
    //     text: 'Existencias',
    //     action: PermissionActions.Read,
    //     tableAction: TableActions.Existences,
    //     permission: Permission.Product,
    //     icon: 'heroicons_outline:building-storefront',
    // },
    {
      text: 'Editar',
      action: PermissionActions.Update,
      tableAction: TableActions.Edit,
      permission: Permission.Product,
      icon: 'heroicons_outline:pencil-square'
    },
    // {
    //     text: 'Imagenes',
    //     action: PermissionActions.Update,
    //     tableAction: TableActions.Images,
    //     permission: Permission.Product,
    //     icon: 'heroicons_outline:photo',
    // },
    {
      text: 'Eliminar',
      action: PermissionActions.Delete,
      tableAction: TableActions.Delete,
      permission: Permission.Product,
      icon: 'heroicons_outline:trash'
    }
  ] as TableMenu[],

  StoreProducts: [
    {
      text: 'Editar',
      action: PermissionActions.Update,
      permission: Permission.StoreProduct,
      icon: 'heroicons_outline:pencil-square'
    },
    {
      text: 'Eliminar',
      action: PermissionActions.Delete,
      permission: Permission.StoreProduct,
      icon: 'heroicons_outline:trash'
    }
  ] as TableMenu[],

  Suppliers: [
    {
      text: 'Editar',
      action: PermissionActions.Update,
      permission: Permission.StockProvider,
      icon: 'heroicons_outline:pencil-square'
    },
    {
      text: 'Eliminar',
      action: PermissionActions.Delete,
      permission: Permission.StockProvider,
      icon: 'heroicons_outline:trash'
    }
  ] as TableMenu[],

  Entries: [
    {
      text: 'Detalle',
      action: PermissionActions.Update,
      permission: Permission.StoreEntry,
      icon: 'heroicons_outline:document-text'
    },
    {
      text: 'Eliminar',
      action: PermissionActions.Delete,
      permission: Permission.StoreEntry,
      icon: 'heroicons_outline:trash'
    }
  ] as TableMenu[],

  Transfers: [
    {
      text: 'Detalle',
      action: PermissionActions.Update,
      permission: Permission.StoreEntry,
      icon: 'heroicons_outline:document-text'
    },
    {
      text: 'Eliminar',
      action: PermissionActions.Delete,
      permission: Permission.StoreEntry,
      icon: 'heroicons_outline:trash'
    }
  ] as TableMenu[],

  TransferDetail: [
    {
      text: 'Editar',
      action: PermissionActions.Update,
      icon: 'heroicons_outline:pencil-square',
      color: 'accent'
    },
    {
      text: 'Eliminar',
      action: PermissionActions.Delete,
      icon: 'heroicons_outline:trash',
      color: 'accent'
    }
  ] as TableMenu[],

  Quotes: [
    {
      text: 'Detalle',
      action: PermissionActions.Update,
      permission: Permission.StoreQuote,
      icon: 'heroicons_outline:document-text'
    },
    {
      text: 'Imprimir',
      action: PermissionActions.Print,
      permission: Permission.StoreQuote,
      icon: 'heroicons_outline:printer'
    },
    {
      text: 'Eliminar',
      action: PermissionActions.Delete,
      permission: Permission.StoreQuote,
      icon: 'heroicons_outline:trash'
    }
  ] as TableMenu[],

  WebOrders: [
    {
      text: 'Detalle',
      action: PermissionActions.Update,
      permission: Permission.WebStore,
      icon: 'heroicons_outline:document-text'
    },
    {
      text: 'Eliminar',
      action: PermissionActions.Delete,
      permission: Permission.WebStore,
      icon: 'heroicons_outline:trash'
    }
  ] as TableMenu[],

  Orders: [
    {
      text: 'Detalle',
      action: PermissionActions.Update,
      permission: Permission.StoreOrder,
      icon: 'heroicons_outline:document-text'
    },
    {
      text: 'Imprimir',
      action: PermissionActions.Print,
      permission: Permission.StoreOrder,
      icon: 'heroicons_outline:printer'
    },
    {
      text: 'Eliminar',
      action: PermissionActions.Delete,
      permission: Permission.StoreOrder,
      icon: 'heroicons_outline:trash'
    }
  ] as TableMenu[],

  EntryDetail: [
    {
      text: 'Editar',
      action: PermissionActions.Update,
      icon: 'heroicons_outline:pencil-square',
      color: 'accent'
    },
    {
      text: 'Eliminar',
      action: PermissionActions.Delete,
      icon: 'heroicons_outline:trash',
      color: 'accent'
    }
  ] as TableMenu[],

  Tenants: [
    {
      text: 'Actualizar plan',
      action: PermissionActions.Update,
      tableAction: TableActions.Edit,
      permission: Permission.Tenant,
      icon: 'mat_solid:update',
      color: 'accent'
    },
    {
      text: 'Activar/Desactivar Tienda Web',
      action: PermissionActions.Update,
      tableAction: TableActions.Switch,
      permission: Permission.Tenant,
      icon: 'mat_outline:shopping_cart',
      color: 'accent'
    },
    {
      text: 'Ver logo',
      action: PermissionActions.Read,
      permission: Permission.Tenant,
      icon: 'mat_outline:image_search',
      color: 'accent'
    }
  ] as TableMenu[],

  TenantSuper: [
    {
      text: 'Renovar',
      action: PermissionActions.Update,
      permission: Permission.Super,
      icon: 'heroicons_outline:clock',
      color: 'accent'
    }
  ] as TableMenu[],

  UserApplications: [
    {
      text: 'Reenviar correo',
      permission: Permission.Super,
      action: PermissionActions.Update,
      icon: 'mat_outline:email',
      color: 'accent'
    }
    // {
    //     text: 'Autorizar',
    //     permission: Permission.Super,
    //     action: PermissionActions.Authorize,
    //     icon: 'heroicons_outline:check-circle',
    //     color: 'accent',
    // },
    // {
    //     text: 'Rechazar',
    //     permission: Permission.Super,
    //     action: PermissionActions.Reject,
    //     icon: 'heroicons_outline:x-circle',
    //     color: 'accent',
    // },
  ] as TableMenu[],

  Tickets: [
    {
      text: 'Detalle',
      action: PermissionActions.Read,
      permission: Permission.Super,
      icon: 'mat_outline:checklist',
      color: 'accent'
    },
    {
      text: 'Finalizar',
      action: PermissionActions.Update,
      permission: Permission.Super,
      icon: 'heroicons_outline:check-circle',
      color: 'accent'
    },
    {
      text: 'Rechazar',
      action: PermissionActions.Reject,
      permission: Permission.Super,
      icon: 'heroicons_outline:x-circle',
      color: 'accent'
    }
  ] as TableMenu[],

  NotificationSent: [
    {
      text: 'Detalle',
      action: PermissionActions.Read,
      permission: Permission.PushNotification,
      icon: 'mat_outline:checklist',
      color: 'accent'
    }
  ] as TableMenu[],

  TenantUpdateApplications: [
    {
      text: 'Autorizar',
      permission: Permission.Super,
      action: PermissionActions.Authorize,
      icon: 'heroicons_outline:check-circle',
      color: 'accent'
    },
    {
      text: 'Rechazar',
      permission: Permission.Super,
      action: PermissionActions.Reject,
      icon: 'heroicons_outline:x-circle',
      color: 'accent'
    }
  ] as TableMenu[]
};
