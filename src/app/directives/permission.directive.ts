import { Directive, Input, ElementRef, OnInit, inject } from '@angular/core';
import { Permission, PermissionActions } from 'app/core/api/configs';
import { UserResponse } from 'app/core/models-api/Identity';
import { SessionService } from 'app/core/services/session.service';

@Directive({
    selector: '[userPermission]',
    standalone: true,
})
export class PermissionDirective implements OnInit {
    private elementRef = inject(ElementRef);
    private sessionService = inject(SessionService);
    @Input({ required: true }) permission: Permission | Permission[];
    @Input() ignore: boolean;
    @Input({ required: true }) action: PermissionActions;

    ngOnInit(): void {
        if (!this.ignore) {
            this.elementRef.nativeElement.style.display = 'none';
            if (Array.isArray(this.permission)) {
                this.permission.forEach((p) => this.checkPermission(p));
            } else {
                this.checkPermission(this.permission);
            }
        }
    }

    checkPermission(permission: Permission) {
        const userData: UserResponse = this.sessionService.getSession();
        if (userData.roleName === Permission.Super) {
            this.elementRef.nativeElement.style.display = '';
            return;
        }
        const containPermission = userData.claims[permission]?.includes(
            this.action
        );
        console.log(containPermission);
        this.elementRef.nativeElement.style.display = containPermission
            ? ''
            : 'none';
    }
}
