import { Subscription } from 'rxjs';
export const Endpoints = {
  IDENTITY: {
    LOGIN: 'identity/Login',
    LOGOUT: 'identity/logout',
    USERS: 'identity/users/',
    ASSIGN_USER_ROL: '/roles/',
    ROLES: 'identity/roles/',
    ROLE_PERMISSION: '/claims/permissions/',
    PERMISSIONS: 'identity/roles/claims/permissions/',
    ASSIGN_USER_STORE: '/claims/stores/',
    CURRENT_USER_STORES: 'identity/users/current/stores/',
    CURRENT_USER_PERMISSION: 'identity/users/current/claims'
  },
  CUSTOMER: 'customers/',
  GYM: 'gyms/',
  STORES: 'stores/',
  STOCK_ENTRIES: '/entries/',
  STOCK_TRANSFERS: '/stock-transfers/',
  PRODUCTS: 'products/',
  PRODUCT_VARIANTS: 'product-variants/',
  SERVICES: 'services/',
  SUPPLIERS: 'stockproviders/',
  ORDERS: '/orders/',
  QUOTES: '/quotes/',
  BUSINESS: 'business/',
  SUBSCRIPTION_PLANS: 'subscriptionplans/',
  TENANTS: 'tenants/',
  USER_APPLICATIONS: 'user-applications/',
  TENANT_APPLICATIONS: 'tenant-applications/',
  TENANT_SUBSCRIPTION_APPLICATIONS: 'tenant-subscription-applications/',
  IMAGES: 'images/',
  NOTIFICATIONS: 'push-notifications/',
  VARIANT_TYPES: 'variant-types/',
  DASHBOARD: 'dashboard/'
};

export const REQUEST_METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH'
};

export type PermissionsTo = {
  claims: Record<Permission, PermissionActions[]>;
};

export enum PermissionActions {
  Create = 'create',
  Read = 'read',
  Update = 'update',
  Delete = 'delete',
  AssignRole = 'assignRole',
  AssignStore = 'assignStore',
  AssignService = 'assignService',
  Switch = 'switch',
  Apply = 'apply',
  Cancel = 'cancel',
  Print = 'print',
  Application = 'application',
  Authorize = 'authorize',
  Reject = 'reject',
  Take = 'take'
}

export enum Permission {
  Super = 'Super',
  Gym = 'gym',
  User = 'user',
  Role = 'role',
  Permission = 'permission',
  RolePermission = 'rolePermission',
  Customer = 'customer',
  Product = 'product',
  StoreProduct = 'storeProduct',
  StoreEntry = 'storeEntry',
  StockTransfer = 'stockTransfer',
  StockProvider = 'stockProvider',
  StoreOrder = 'storeOrder',
  StoreQuote = 'storeQuote',
  SubscriptionPlan = 'subscriptionPlan',
  Tenant = 'tenant',
  PushNotification = 'pushNotification',
  Inbox = 'inbox',
  WebStore = 'webStore',
  Dashboard = 'dashboard'
}

export const PaymentType = [
  {
    key: 1,
    value: 'Mensual'
  },
  { key: 2, value: 'Anual' }
];

export const TicketStatus = [
  {
    key: 0,
    value: 'Pendiente'
  },
  {
    key: 1,
    value: 'Finalizado'
  },
  { key: 2, value: 'Rechazado' }
];

export const TicketCategory = [
  {
    key: 1,
    value: 'Información de planes'
  },
  { key: 2, value: 'Información de plan Enterprise' },

  { key: 3, value: 'Reportar error' },
  {
    key: 0,
    value: 'Otros'
  }
];

export const PushNotificationChannelType = [
  {
    key: 1,
    value: 'Usuario'
  },
  { key: 2, value: 'Empresa' },

  { key: 3, value: 'Sucursal' }
];

export enum NotificationChannelType {
  User = 1,
  Business = 2,
  Store = 3
}
