import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';
import { ClaimsResponse, UserResponse } from '../models-api/Identity';
import { StorageService } from './storage.service';
import { Endpoints, Permission, PermissionActions, REQUEST_METHOD } from '../api/configs';
// import { OnlineNotificationsService } from './online-notifications.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private api = inject(ApiService);
  private storageService = inject(StorageService);
  // private onlineNotificationsService = inject(OnlineNotificationsService);
  private routerService = inject(Router);
  private queues = 0;

  getQueue(): number {
    return this.queues;
  }

  upQueue() {
    this.queues += 1;
  }
  downQueue() {
    this.queues -= 1;
  }

  logIn(value): Observable<UserResponse> {
    return this.api.CallApi<UserResponse>(REQUEST_METHOD.POST, Endpoints.IDENTITY.LOGIN, value);
  }

  refreshClaims(): Observable<UserResponse> {
    return this.api.CallApi<UserResponse>(
      REQUEST_METHOD.GET,
      Endpoints.IDENTITY.CURRENT_USER_PERMISSION
    );
  }

  logOut() {}

  logOutExpired() {
    // this.onlineNotificationsService.stopConnection();
    // this.routerService.navigate(['/sign-in']);
  }

  getSession() {}

  evaluatePermission(permission: Permission, action: PermissionActions): boolean {
    // const userData = this.getSession();
    // if (userData.roleName === Permission.Super) return true;
    // const containPermission = userData.claims[permission]?.includes(action);
    // return containPermission ? true : false;
    return false;
  }

  hasSomePermission(permission: Permission[]): boolean {
    // const userData = this.getSession();
    // if (userData?.roleName === Permission.Super) return true;
    // const hasOne = permission.some((perm) => {
    //   return userData?.claims[perm] ? true : false;
    // });
    return false;
  }
}
