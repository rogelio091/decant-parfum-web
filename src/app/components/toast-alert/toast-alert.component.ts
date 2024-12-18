import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from './toast.service';
import { fadeOut } from '@fuse/animations/fade';
import { MatIconModule } from '@angular/material/icon';
import { shake } from '@fuse/animations/shake';

export type ToastConfig = {
    type: 'success' | 'warn' | 'error' | 'notification';
    message: string;
};

@Component({
    selector: 'app-toast-alert',
    standalone: true,
    imports: [CommonModule, MatIconModule],
    templateUrl: './toast-alert.component.html',
    styleUrl: './toast-alert.component.scss',
    animations: [fadeOut, shake],
})
export class ToastAlertComponent implements OnInit {
    toastService = inject(ToastService);

    toastConfig = signal<ToastConfig>(undefined);

    ngOnInit(): void {
        this.toastService.toast$.asObservable().subscribe((toast) => {
            console.log(toast);
            this.toastConfig.set(toast);
        });
    }

    close() {
        this.toastService.closeToast();
    }
}
