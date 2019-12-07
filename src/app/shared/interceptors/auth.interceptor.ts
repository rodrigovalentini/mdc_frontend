import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable, Injector } from '@angular/core';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private injector: Injector) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if ( !request.url.includes('https://n161.tech/api/dummyapi/user')) {
            const authRequest = request.clone(
                {
                    setHeaders: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.token}`
                    }
                });
            return next.handle(authRequest);
        } else {
            return next.handle(request);
        }
    }
}
