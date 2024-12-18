import { Injectable, inject } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';
import {
  PermissionResponse,
  RolPermissionsResponse,
  RoleResponse,
  UserListResponse,
  UserResponse,
  UserRolRequest,
  UserStoreRequest
} from '../models-api/Identity';
import { Endpoints, REQUEST_METHOD } from '../api/configs';
import { PaginatedResponse } from '../models-api/PaginatedResponse';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {
  private apiService = inject(ApiService);

  getUsers(): Observable<UserListResponse[]> {
    return this.apiService.CallApi<UserListResponse[]>(
      REQUEST_METHOD.GET,
      Endpoints.IDENTITY.USERS
    );
  }

  postUser(user: UserResponse): Observable<UserResponse> {
    return this.apiService.CallApi<UserResponse>(
      user.id ? REQUEST_METHOD.PUT : REQUEST_METHOD.POST,
      Endpoints.IDENTITY.USERS,
      user,
      user.id ?? ''
    );
  }

  deleteUser(user: UserListResponse): Observable<any> {
    return this.apiService.CallApi(REQUEST_METHOD.DELETE, Endpoints.IDENTITY.USERS, {}, user.id);
  }

  getRolesAdmin(pagination: {
    PageNumber: number;
    PageSize: number;
  }): Observable<PaginatedResponse<RoleResponse>> {
    return this.apiService.CallApi<PaginatedResponse<RoleResponse>>(
      REQUEST_METHOD.GET,
      `${Endpoints.IDENTITY.ROLES}?PageNumber=${pagination.PageNumber}&PageSize=${pagination.PageSize}`
    );
  }

  getRol(id: string): Observable<RoleResponse> {
    return this.apiService.CallApi<RoleResponse>(
      REQUEST_METHOD.GET,
      Endpoints.IDENTITY.ROLES,
      {},
      id
    );
  }

  postRol(rol: RoleResponse): Observable<RoleResponse> {
    return this.apiService.CallApi<RoleResponse>(
      rol.id ? REQUEST_METHOD.PUT : REQUEST_METHOD.POST,
      Endpoints.IDENTITY.ROLES,
      rol,
      rol.id ?? ''
    );
  }

  deleteRol(rol: RoleResponse): Observable<any> {
    return this.apiService.CallApi(REQUEST_METHOD.DELETE, Endpoints.IDENTITY.ROLES, {}, rol.id);
  }

  getRolPermissions(id: string): Observable<RolPermissionsResponse[]> {
    return this.apiService.CallApi<RolPermissionsResponse[]>(
      REQUEST_METHOD.GET,
      Endpoints.IDENTITY.ROLES + id + Endpoints.IDENTITY.ROLE_PERMISSION
    );
  }

  postRolPermissions(id: string, rolPermissions: RolPermissionsResponse[]): Observable<any> {
    return this.apiService.CallApi<any>(
      REQUEST_METHOD.POST,
      Endpoints.IDENTITY.ROLES + id + Endpoints.IDENTITY.ROLE_PERMISSION,
      rolPermissions
    );
  }

  getPermissions(): Observable<PermissionResponse[]> {
    return this.apiService.CallApi<PermissionResponse[]>(
      REQUEST_METHOD.GET,
      Endpoints.IDENTITY.PERMISSIONS
    );
  }

  postUserRol(userRol: UserRolRequest): Observable<any> {
    return this.apiService.CallApi<any>(
      REQUEST_METHOD.POST,
      Endpoints.IDENTITY.USERS +
        userRol.userId +
        Endpoints.IDENTITY.ASSIGN_USER_ROL +
        userRol.roleId
    );
  }

  // getCurrentUserStores(): Observable<UserStoreResponse> {
  //     return this.apiService.CallApi<UserStoreResponse>(
  //         REQUEST_METHOD.GET,
  //         Endpoints.IDENTITY.CURRENT_USER_STORES
  //     );
  // }

  postUserStore(userStore: UserStoreRequest): Observable<any> {
    return this.apiService.CallApi<any>(
      REQUEST_METHOD.POST,
      Endpoints.IDENTITY.USERS + userStore.userId + Endpoints.IDENTITY.ASSIGN_USER_STORE,
      userStore.storeIds
    );
  }

  checkResetPasswordToken(userId: string, token: string): Observable<any> {
    return this.apiService.CallApi<any>(
      REQUEST_METHOD.POST,
      `${Endpoints.IDENTITY.USERS}check-reset-password-token?userId=${userId}&token=${token}`
    );
  }

  confirmResetPassword(userId: string, token: string, password: string): Observable<any> {
    return this.apiService.CallApi<any>(
      REQUEST_METHOD.POST,
      `${Endpoints.IDENTITY.USERS}confirm-reset-password?userId=${userId}&token=${token}`,
      password
    );
  }

  changeBusiness(userId: string, tenantId: number): Observable<UserResponse> {
    return this.apiService.CallApi<UserResponse>(
      REQUEST_METHOD.POST,
      `${Endpoints.IDENTITY.USERS}${userId}/claims/current-tenant/${tenantId}`
    );
  }

  sendResetPasswordEmail(values: { email: string }): Observable<any> {
    return this.apiService.CallApi<any>(
      REQUEST_METHOD.POST,
      `${Endpoints.IDENTITY.USERS}send-reset-password`,
      values
    );
  }
}
