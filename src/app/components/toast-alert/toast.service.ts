import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastConfig } from './toast-alert.component';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toast$ = new BehaviorSubject<ToastConfig>(undefined);
  private toast: ToastConfig;

  showSuccessToast(message: string) {
    this.toast = { type: 'success', message: message };
    this.toast$.next(this.toast);
    setTimeout(() => {
      this.closeToast();
    }, 7000);
  }

  showWarnToast(message: string) {
    this.toast = { type: 'warn', message: message };
    this.toast$.next(this.toast);
    setTimeout(() => {
      this.closeToast();
    }, 10000);
  }

  showErrorToast(message: string) {
    this.toast = { type: 'error', message: message };
    this.toast$.next(this.toast);
    setTimeout(() => {
      this.closeToast();
    }, 10000);
  }

  showNotificationToast() {
    this.toast = { type: 'notification', message: 'Nueva notificación' };
    this.toast$.next(this.toast);
    setTimeout(() => {
      this.closeToast();
    }, 15000);
  }

  closeToast() {
    this.toast = undefined;
    this.toast$.next(this.toast);
  }
}
