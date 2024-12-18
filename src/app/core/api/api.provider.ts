import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
    ENVIRONMENT_INITIALIZER,
    EnvironmentProviders,
    inject,
    Provider,
} from '@angular/core';
import { ApiService } from './api.service';
import { apiInterceptor } from './api.interceptor';

export const provideApi = (): Array<Provider | EnvironmentProviders> => {
    return [
        provideHttpClient(withInterceptors([apiInterceptor])),
        {
            provide: ENVIRONMENT_INITIALIZER,
            useValue: () => inject(ApiService),
            multi: true,
        },
    ];
};
