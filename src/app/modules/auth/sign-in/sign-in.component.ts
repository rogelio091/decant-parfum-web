import { Component, inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertComponent, FuseAlertType } from '@fuse/components/alert';
import {
  DinamicFormComponent,
  StateForm
} from 'app/components/dinamic-form/dinamic-form.component';
import { FormTemplateModel } from 'app/components/dinamic-form/models/form-model';
import { AuthService } from 'app/core/auth/auth.service';
import { Forms } from 'app/core/forms/forms';
import { SessionService } from 'app/core/services/session.service';
import { StorageService } from 'app/core/services/storage.service';
import { environment } from 'environments/environment';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'auth-sign-in',
  templateUrl: './sign-in.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
  standalone: true,
  imports: [
    DinamicFormComponent,
    RouterLink,
    FuseAlertComponent,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatProgressSpinnerModule
  ]
})
export class AuthSignInComponent implements OnInit {
  private _sessionService = inject(SessionService);
  private _storageService = inject(StorageService);
  private _router = inject(Router);
  private _activatedRoute = inject(ActivatedRoute);

  alert: { type: FuseAlertType; message: string } = {
    type: 'success',
    message: ''
  };

  formLogin$ = new BehaviorSubject<FormTemplateModel>(Forms['LoginForm']);
  stateFormLogin$ = new BehaviorSubject<StateForm>({ resetForm: false });
  signInForm: UntypedFormGroup;
  showAlert: boolean = false;

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Create the form
    if (!environment.production) {
      const formWValues = { ...this.formLogin$.getValue() };
      formWValues.Fields = formWValues.Fields.map((fld) => {
        if (fld.Code === 'userName') return { ...fld, Value: 'dgranados' };
        if (fld.Code === 'password') return { ...fld, Value: '6Fp#CBQoa$KtU5' };
      });
      this.formLogin$.next(formWValues);
    }
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Sign in
   */
  signIn(values: { userName: string; password: string }): void {
    // Hide the alert
    this._sessionService.logIn(values).subscribe({
      next: (response) => {
        console.log(response);
        this._storageService.setUserValue(response);
        const redirectURL =
          this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';

        // Navigate to the redirect url
        this._router.navigateByUrl(redirectURL);
      }
    });
    //     () => {
    //         // Set the redirect url.
    //         // The '/signed-in-redirect' is a dummy url to catch the request and redirect the user
    //         // to the correct page after a successful sign in. This way, that url can be set via
    //         // routing file and we don't have to touch here.
    //         const redirectURL =
    //             this._activatedRoute.snapshot.queryParamMap.get(
    //                 'redirectURL'
    //             ) || '/signed-in-redirect';

    //         // Navigate to the redirect url
    //         this._router.navigateByUrl(redirectURL);
    //     },
    //     (response) => {
    //         // Set the alert
    //         this.alert = {
    //             type: 'error',
    //             message: 'Wrong email or password',
    //         };

    //         // Show the alert
    //         this.showAlert = true;
    //     }
    // );
  }
}
