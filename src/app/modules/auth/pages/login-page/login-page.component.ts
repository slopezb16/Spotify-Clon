import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  //Analisa los hijos que estan en el fromGrups o de la etiqueta form con su respectiva clase
  //cada hijo (Cada imput) es capas de tener su propio estado (Valor y validacion)
  formLogin: FormGroup = new FormGroup({});

  //Validar el erro
  errorSession: boolean = false;

  constructor(
    private authSevice: AuthService,
    private cookie: CookieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
      ]),
    });
  }

  sendLogin(): void {
    const { email, password } = this.formLogin.value;
    // console.log('Variables', body);
    this.authSevice.sendCredentials(email, password).subscribe(
      (response) => {
        console.log('Sesion Iniciada correctamente', response);
        const { tokenSession, data } = response;
        this.cookie.set('token', tokenSession, 4, '/'); //TODO:📌📌📌📌
        this.router.navigate(['/', 'tracks']);
      },
      (err) => {
        // TODO: Error <400
        console.log('Error de autentificacion', err);
        this.errorSession = true;
      }
    );
  }
}
