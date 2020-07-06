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
    const loginUrl = environment.urlApi + '/login';
    const headers = { 'Content-Type': 'application/json' };
    const body = { email, password };

    return this.http
      .post<any>(loginUrl, body, { headers })
      .pipe(catchError(this.handleError));
  }

  //TODO: teste
  logout() {
    this.clearStorage();
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

  //TODO: Componente
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Ocorreu um erro:', error.error.message);
    } else {
      console.error(
        `A Api retornou ${error.status}, ` + `com o corpo: ${error.error}`
      );
    }
    return throwError(
      'Algo deu errado, por favor, tente novamente mais tarde.'
    );
  }
}
