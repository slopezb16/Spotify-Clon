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
  withInterceptors,
} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ingectSessionInterceptor } from '@core/interceptors/ingect-session.interceptor';
import { appConfig } from './app/app.config';
import { authorizationInterceptor } from '@core/interceptors/session.interceptor';

if (environment.production) {
  enableProdMode();
}

// bootstrapApplication(AppComponent, appConfig).catch((err) =>
//   console.error(err)
// );

// bootstrapApplication(AppComponent, {
//   providers: [
//     importProvidersFrom(BrowserModule), // Asegúrate de que esto esté bien configurado
//     CookieService,
//     //TODO Forma vieja
//     // {
//     //   provide: HTTP_INTERCEPTORS,
//     //   useClass: InjectSessionInterceptor, // Cambiado a useClass
//     //   multi: true,
//     // },
//     // provideHttpClient(withInterceptorsFromDi()),
//     //TODO Forma nueva
//     provideHttpClient(withInterceptors([authorizationInterceptor])),
//   ],
// }).catch((err) => console.error(err));

// TODO Funcional
bootstrapApplication(AppComponent, {
  ...appConfig, // Mantener la configuración existente de `appConfig`
  providers: [
    ...appConfig.providers, // Incluir los proveedores ya definidos en `appConfig`
    importProvidersFrom(BrowserModule), // Importar BrowserModule
    CookieService, // Proveer el servicio de cookies
    provideHttpClient(withInterceptors([authorizationInterceptor])), // Proveer interceptor con HttpClient
  ],
}).catch((err) => console.error(err));
