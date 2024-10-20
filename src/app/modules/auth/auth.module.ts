import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
// import { RegisterPageComponent } from './pages/login-page/register-page/register-page.component'; //TODO No hay necesidad de declararlo RegisterPageComponent dado que ya es un standalone

@NgModule({
  declarations: [LoginPageComponent], //TODO No hay necesidad de declararlo RegisterPageComponent dado que ya es un standalone
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule],
})
export class AuthModule {}
