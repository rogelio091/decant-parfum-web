import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { IdentityService } from '../services/identity.service';
import { Observable } from 'rxjs';
import { UserApplicationsService } from '../services/user-applications.service';

export const resetPasswordGuard: CanActivateFn = (route, state) => {
    const _identityService = inject(IdentityService);
    const _userApplicationService = inject(UserApplicationsService);
    const _router = inject(Router);
    const userId = route.queryParamMap.get('userId');
    const userAppId = route.queryParamMap.get('userApplicationId');
    const token = route.queryParamMap.get('token');
    const tokenEncode = encodeURIComponent(token);
    console.log(tokenEncode);
    if (userId)
        return new Observable<boolean>((observer) => {
            _identityService
                .checkResetPasswordToken(userId, tokenEncode)
                .subscribe({
                    next: (response) => {
                        observer.next(true);
                    },
                    error: (error) => {
                        _router.navigate(['/sign-in']);
                        observer.next(false);
                    },
                });
        });
    if (userAppId)
        return new Observable<boolean>((observer) => {
            _userApplicationService
                .checkResetPasswordUserAppToken(userAppId, tokenEncode)
                .subscribe({
                    next: (response) => {
                        observer.next(true);
                    },
                    error: (error) => {
                        _router.navigate(['/sign-in']);
                        observer.next(false);
                    },
                });
        });

    return false;
};
