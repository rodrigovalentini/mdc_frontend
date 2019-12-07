import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PortalService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    const apiUrl = 'https://n161.tech/api/dummyapi/user';
    return this.http.get(apiUrl)
      .pipe(map((response: any) => response),
        catchError(err => {
          return throwError(err);
        }));
  }
}
