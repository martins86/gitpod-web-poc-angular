import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { environment } from './../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  //TODO: teste
  login(email, password): Observable<any> {
    const loginUrl = environment.urlApi + '/signin';
    const headers = { 'Content-Type': 'application/json' };
    const body = { email, password };

    return this.http
      .post<any>(loginUrl, body, { headers })
      .pipe(catchError(this.handleError));
  }

  //TODO: teste
  setOnStorage(authToken) {
    sessionStorage.setItem('user-token', authToken);
  }

  //TODO: teste
  clearStorage() {
    sessionStorage.clear();
    sessionStorage.removeItem('user-token');
  }

  //TODO: teste
  get userIsLogged() {
    const authToken = sessionStorage.getItem('user-token');
    return authToken !== null && authToken !== undefined;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }
}
