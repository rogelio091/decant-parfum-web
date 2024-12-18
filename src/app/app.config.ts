import { provideHttpClient } from '@angular/common/http';
import { APP_INITIALIZER, ApplicationConfig, inject } from '@angular/core';
import { LuxonDateAdapter } from '@angular/material-luxon-adapter';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  PreloadAllModules,
  provideRouter,
  withInMemoryScrolling,
  withPreloading
} from '@angular/router';
import { provideFuse } from '@fuse';
import { TranslocoService, provideTransloco } from '@ngneat/transloco';
import { appRoutes } from 'app/app.routes';
import { provideAuth } from 'app/core/auth/auth.provider';
import { provideIcons } from 'app/core/icons/icons.provider';
import { mockApiServices } from 'app/mock-api';
import { firstValueFrom } from 'rxjs';
import { TranslocoHttpLoader } from './core/transloco/transloco.http-loader';
import { provideApi } from './core/api/api.provider';
import { ConfigService, initializeApp } from './core/services/config.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    provideRouter(
      appRoutes,
      withPreloading(PreloadAllModules),
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })
    ),

    // Material Date Adapter
    {
      provide: DateAdapter,
      useClass: LuxonDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: {
        parse: {
          dateInput: 'DD/MM/YYYY' // this is how your date will be parsed from Input
        },
        display: {
          dateInput: 'DD/MM/YYYY', // this is how your date will get displayed on the Input
          monthYearLabel: 'MMMM YYYY',
          dateA11yLabel: 'LL',
          monthYearA11yLabel: 'MMMM YYYY'
        }
      }
    },

    // Transloco Config
    provideTransloco({
      config: {
        availableLangs: [
          {
            id: 'en',
            label: 'English'
          },
          {
            id: 'tr',
            label: 'Turkish'
          }
        ],
        defaultLang: 'en',
        fallbackLang: 'en',
        reRenderOnLangChange: true,
        prodMode: true
      },
      loader: TranslocoHttpLoader
    }),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [ConfigService],
      multi: true
    },
    {
      // Preload the default language before the app starts to prevent empty/jumping content
      provide: APP_INITIALIZER,
      useFactory: () => {
        const translocoService = inject(TranslocoService);
        const defaultLang = translocoService.getDefaultLang();
        translocoService.setActiveLang(defaultLang);

        return () => firstValueFrom(translocoService.load(defaultLang));
      },
      multi: true
    },

    provideApi(),

    // Fuse
    provideAuth(),
    provideIcons(),
    provideFuse({
      mockApi: {
        delay: 0,
        services: mockApiServices
      },
      fuse: {
        layout: 'centered',
        scheme: 'light',
        screens: {
          sm: '600px',
          md: '960px',
          lg: '1280px',
          xl: '1440px'
        },
        theme: 'theme-default',
        themes: [
          {
            id: 'theme-default',
            name: 'Default'
          },
          {
            id: 'theme-brand',
            name: 'Brand'
          },
          {
            id: 'theme-teal',
            name: 'Teal'
          },
          {
            id: 'theme-rose',
            name: 'Rose'
          },
          {
            id: 'theme-purple',
            name: 'Purple'
          },
          {
            id: 'theme-amber',
            name: 'Amber'
          }
        ]
      }
    })
  ]
};
