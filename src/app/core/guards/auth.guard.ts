import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { SessionService } from '../services/session.service';
import { PermissionActions } from '../api/configs';

export const authGuard: CanActivateFn = (route, state) => {
  const sessionService = inject(SessionService);
  const routerService = inject(Router);
  const response = sessionService.getSession();
  console.log('holi');
  if (!response) {
    return true;
  }
  return routerService.navigate(['/']);
};

export const activeSessionGuard: CanActivateFn | CanActivateChildFn = (route, state) => {
  const sessionService = inject(SessionService);
  const routerService = inject(Router);
  const response = sessionService.getSession();
  console.log('holi');
  if (response) {
    console.log(response);
    return true;
  }
  sessionService.logOut();
  const redirectURL = state.url === '/sign-out' ? '' : `redirectURL=${state.url}`;
  const urlTree = routerService.parseUrl(`sign-in?${redirectURL}`);
  return routerService.navigateByUrl(urlTree);
};

export const verifyPermissionGuard: CanActivateFn | CanActivateChildFn = (route, state) => {
  console.log('holi');
  const routerService = inject(Router);
  const sessionService = inject(SessionService);
  const response = sessionService.evaluatePermission(
    route.data.permission,
    route.data.action ?? PermissionActions.Read
  );
  if (response) {
    console.log(response);
    return true;
  }
  // location.back();
  return routerService.navigate(['/']);
};

// export const validateStoreGuard: CanActivateFn | CanActivateChildFn = (
//     route,
//     state
// ) => {
//     const location = inject(Location);
//     const sessionService = inject(SessionService);
//     const routerService = inject(Router);
//     const stores = sessionService.getSessionStores();
//     const paramStore = route.paramMap.get('idStore');
//     const exists = stores.find((store) => store.id === parseInt(paramStore));
//     console.log('VALIDATE STORE');
//     if (exists) {
//         console.log(stores);
//         return true;
//     }
//     location.back();
//     return false;
// };

export const superGuard: CanActivateFn | CanActivateChildFn = (route, state) => {
  const sessionService = inject(SessionService);
  const routerService = inject(Router);
  const response = sessionService.getSession();
  if (response.roleName === 'Super') {
    return true;
  }
  return routerService.navigate(['/not-found']);
};
