import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.css',
    standalone: true,
    imports: [ReactiveFormsModule],
})
export class LoginPageComponent {
  //Analisa los hijos que estan en el fromGrups o de la etiqueta form con su respectiva clase
  //cada hijo (Cada imput) es capas de tener su propio estado (Valor y validacion)
  formLogin: FormGroup = new FormGroup({});

  constructor(private authSevice: AuthService) {}

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
    this.authSevice.sendCredentials(email, password);
  }
}
