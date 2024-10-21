//TODO funciona pero sin los modulos deendientes
// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig).catch((err) =>
//   console.error(err)
// );

//TODO queda la pantalla en negro
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import {
  provideHttpClient,
  withInterceptorsFromDi,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ingectSessionInterceptor } from '@core/interceptors/ingect-session.interceptor';
import { appConfig } from './app/app.config';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

// bootstrapApplication(AppComponent, appConfig, {
//   providers: [
//     importProvidersFrom(BrowserModule), // Asegúrate de que esto esté bien configurado
//     CookieService,
//     {
//       provide: HTTP_INTERCEPTORS,
//       useClass: ingectSessionInterceptor, // Cambiado a useClass
//       multi: true,
//     },
//     provideHttpClient(withInterceptorsFromDi()),
//   ],
// }).catch((err) => console.error(err));
