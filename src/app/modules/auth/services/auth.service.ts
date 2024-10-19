import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { url } from 'inspector';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient, private cookie: CookieService) {}

  sendCredentials(email: string, password: string): Observable<any> {
    console.log(email, password);

    const body = {
      // email: 'test@test.com',
      // password: '12345678',
      email,
      password,
    };

    return this.http.post(`${this.URL}/auth/login`, body).pipe(
      tap((response: any) => {
        const { tokenSession, data } = response;
        this.cookie.set('tokenServicio', tokenSession, 4, '/'); //TODO:📌📌📌📌
      })
    );
  }

  //TODO: prueba para Prueba Unitaria
  suma(a: number, b: number): number {
    return a + b;
  }
}
