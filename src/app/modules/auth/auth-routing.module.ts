import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  {
    path: 'login', //TODO: http://localhosto/auth/login
    component: LoginPageComponent,
  },
  {
    //Redireccionamos a la ruta correcta en caso de que traten de moverse a otra carpeta o archivo
    path: '**', //TODO: http://localhosto/auth/login
    redirectTo: '/auth/login',
  },
  // {
  //   path: '', //TODO: http://localhosto/auth/login
  //   component: LoginPageComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
