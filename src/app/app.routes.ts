import { Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';

export const routes: Routes = [
  {
    path: 'auth', //TODO (Public) Login, Register, Forgot...
    // path: 'home',
    // component: HomeComponent, // no usa lazy load
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '', //TODO (Private) 🔴🔴
    component: HomePageComponent,
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
];
