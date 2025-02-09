import { Route } from '@angular/router';
import { initialDataResolver } from 'app/app.resolvers';
import { LayoutComponent } from 'app/layout/layout.component';
import { Permission, PermissionActions } from './core/api/configs';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [
  // Redirect empty path to '/example'
  { path: '', pathMatch: 'full', redirectTo: 'decants' },

  // Redirect signed-in user to the '/example'
  //
  // After the user signs in, the sign-in page will redirect the user to the 'signed-in-redirect'
  // path. Below is another redirection for that path to redirect the user to the desired
  // location. This is a small convenience to keep all main routes together here on this file.
  { path: 'signed-in-redirect', pathMatch: 'full', redirectTo: 'decants' },

  // Auth routes for guests
  {
    path: '',
    // canActivateChild: [authGuard],
    component: LayoutComponent,
    data: {
      layout: 'empty'
    },
    children: [
      {
        path: 'confirmation-required',
        loadChildren: () =>
          import('app/modules/auth/confirmation-required/confirmation-required.routes')
      },
      {
        path: 'forgot-password',
        loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.routes')
      },
      {
        path: 'reset-password',
        loadChildren: () => import('app/modules/auth/reset-password/reset-password.routes')
      },
      { path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.routes') },
      { path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.routes') }
    ]
  },

  // Auth routes for authenticated users
  {
    path: '',
    // canActivateChild: [activeSessionGuard],
    component: LayoutComponent,
    data: {
      layout: 'empty'
    },
    children: [
      { path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.routes') },
      {
        path: 'unlock-session',
        loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.routes')
      }
    ]
  },

  // Landing routes
  {
    path: '',
    component: LayoutComponent,
    data: {
      layout: 'empty'
    },
    children: [{ path: 'home', loadChildren: () => import('app/modules/landing/home/home.routes') }]
  },

  // Admin routes
  {
    path: '',
    // canActivateChild: [activeSessionGuard],
    component: LayoutComponent,
    resolve: {
      initialData: initialDataResolver
    },
    children: [
      // { path: 'example', loadChildren: () => import('app/modules/admin/example/example.routes') },

      {
        path: 'decants',
        loadComponent: () =>
          import('app/modules/fragance-list/fragance-list.component').then(
            (m) => m.FraganceListComponent
          )
      },
      {
        path: 'checkout',
        loadComponent: () =>
          import('app/modules/checkout/checkout.component').then((m) => m.CheckoutComponent)
      },

      {
        path: 'faqs',
        loadComponent: () => import('app/modules/faqs/faqs.component').then((m) => m.FaqsComponent)
      }
      // {
      //   path: 'fragances',
      //   loadComponent: () =>
      //     import('app/modules/admin/fragance-list/fragance-list.component').then(
      //       (m) => m.FraganceListComponent
      //     )
      // }
      // {
      //   path: 'users',
      //   // canActivate: [verifyPermissionGuard],
      //   data: { permission: Permission.User },
      //   loadComponent: () =>
      //     import('app/modules/users/users.component').then((m) => m.UsersComponent)
      // },
      // {
      //   path: 'roles',
      //   // canActivateChild: [verifyPermissionGuard],
      //   data: { permission: Permission.Role },
      //   children: [
      //     {
      //       path: '',
      //       loadComponent: () =>
      //         import('app/modules/roles/roles.component').then((m) => m.RolesComponent)
      //     }
      //     // {
      //     //     path: ':id/permissions',
      //     //     canActivateChild: [verifyPermissionGuard],
      //     //     data: {
      //     //         permission: Permission.RolePermission,
      //     //         action: PermissionActions.Read,
      //     //     },
      //     //     loadComponent: () =>
      //     //         import(
      //     //             'app/modules/roles/permissions/permissions.component'
      //     //         ).then((m) => m.PermissionsComponent),
      //     // },
      //   ]
      // },
    ]
  }
];
