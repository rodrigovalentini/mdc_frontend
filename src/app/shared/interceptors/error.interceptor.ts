import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, retry, debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {

  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler): any {
    return next.handle(request).pipe(
      tap(
        event => { },
        error => {
          if (error instanceof HttpErrorResponse) {
           console.log(error);
          }
        }
      ));

  }


}