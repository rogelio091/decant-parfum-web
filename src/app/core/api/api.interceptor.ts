import { inject } from '@angular/core';
import { HttpRequest, HttpEvent, HttpInterceptorFn, HttpHandlerFn, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import {
    Observable,
    TimeoutError,
    catchError,
    map,
    throwError,
    timeout,
} from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { SessionService } from '../services/session.service';
import { ToastService } from 'app/components/toast-alert/toast.service';
import { Router } from '@angular/router';

export const apiInterceptor: HttpInterceptorFn = (
    request: HttpRequest<unknown>,
    next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
    const spinnerService = inject(NgxSpinnerService);
    const sessionService = inject(SessionService);
    const toastService = inject(ToastService);
    const router = inject(Router);
    if (request.url.includes('assets')) return next(request);

    spinnerService.show('general');
    sessionService.upQueue();

    return next(request).pipe(
        timeout(60000),
        map((event: HttpEvent<unknown>) => {
            if (event instanceof HttpResponse) {
                sessionService.downQueue();
                if (sessionService.getQueue() === 0)
                    spinnerService.hide('general');
            }
            console.log(event);
            return event;
        }),
        catchError((error: HttpErrorResponse) => {
            const started = Date.now();
            const elapsed = Date.now() - started;
            console.log(
                `Request for ${request.urlWithParams} failed after ${elapsed} ms.`
            );
            console.log(error);
            sessionService.downQueue();

            if (sessionService.getQueue() === 0) spinnerService.hide('general');
            if (request.url.includes('images') && error.status === 404)
                return throwError(() => error);
            if (error.status) {
                if (error.status === 451) {
                    sessionService.logOut();
                    sessionService.logOutExpired();
                    toastService.showErrorToast(error.error.title);
                    router.navigate(['/sign-in']);
                } else if (error.status === 401) {
                    sessionService.logOutExpired();
                    router.navigate(['/sign-in']);
                } else if (error.status === 500)
                    toastService.showErrorToast(
                        'Ha ocurrido un problema, intenta nuevamente.'
                    );
                else if (error.status === 403 || error.status === 404)
                    toastService.showErrorToast(error.error.title);
                else if (error.status === 400) return throwError(() => error);
                else if (error.status === 409) {
                    if (request.url.includes('print'))
                        return throwError(() => error);
                    toastService.showErrorToast(error.error.title);
                } else
                    toastService.showErrorToast(
                        'Ha ocurrido un problema, intenta más tarde'
                    );
            } else {
                error.error as TimeoutError;
                if (error.error.name === 'TimeoutError')
                    toastService.showErrorToast(
                        'Ha ocurrido un problema, intenta más tarde'
                    );
            }
            // debugger;
            return throwError(() => error);
        })
    );
};
