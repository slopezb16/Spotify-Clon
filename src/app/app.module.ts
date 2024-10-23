import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';
import { ingectSessionInterceptor } from '@core/interceptors/ingect-session.interceptor';
import { DemoStandaloneComponent } from './shared/demo-standalone/demo-standalone.component';
// import { RegisterPageComponent } from './register-page/register-page.component'; //TODO No hay necesidad de declararlo RegisterPageComponent dado que ya es un standalone

@NgModule({
  declarations: [
    //TODO: Declaraciones, componentes, directivas, pipes
    // RegisterPageComponent, //TODO No hay necesidad de declararlo RegisterPageComponent dado que ya es un standalone
  
    DemoStandaloneComponent
  ],
  imports: [
    //TODO: Solo se importan otros modules
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useValue: ingectSessionInterceptor,
      multi: true,
    },
  ],
})
export class AppModule {}
