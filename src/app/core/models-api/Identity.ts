import { PermissionActions, Permission } from '../api/configs';

export type UserResponse = {
  id?: string;
  userName: string;
  email: string;
  fullName: string;
  phoneNumber: string;
  password?: string;
  roleId: number;
  roleName: string;
  claims: Claims;
};

export type ClaimsResponse = {
  claims: Claims;
};

export type Claims = Record<Permission, PermissionActions[]>;

export type UserListResponse = {
  id?: string;
  userName: string;
  email: string;
  fullName: string;
  phoneNumber: string;
  password?: string;
  roleId: string;
  roleName: string;
  claims: UserClaimsStore;
};

export type RoleResponse = {
  id: string;
  name: string;
};

export type PermissionResponse = {
  resource: Permission;
  actions: PermissionActions[];
};

export type RolPermissionsResponse = {
  type: Permission;
  value: PermissionActions;
};

export type UserRolRequest = {
  roleId: string;
  userId: string;
};

export type UserStoreRequest = {
  storeIds: number[];
  userId: string;
};

export type UserClaimsStore = {
  storeId: number[];
};
