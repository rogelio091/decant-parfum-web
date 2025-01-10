import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { SessionService } from '../services/session.service';
import { PermissionActions } from '../api/configs';

// export const authGuard: CanActivateFn = (route, state) => {
//   const sessionService = inject(SessionService);
//   const routerService = inject(Router);
//   const response = sessionService.getSession();
//   console.log('holi');
//   if (!response) {
//     return true;
//   }
//   return routerService.navigate(['/']);
// };
