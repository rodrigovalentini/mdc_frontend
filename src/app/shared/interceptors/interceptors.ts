import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { LoadingInterceptor } from './loading.interceptor';
import { ErrorInterceptor } from './error.interceptor';
import { RequestTimestampInterceptor } from './request-timestamp.interceptor';

export const interceptorProviders =
  [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  //  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RequestTimestampInterceptor, multi: true },
  ];
