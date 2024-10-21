import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        LoginPageComponent,
    ],
}).compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //TODO: Tu primer enunciado el cual debe de asegurar lo siguiente
  //TODO: Debe de asegurarse que el formulario sea invalido cuando ingrese dato erroneos

  //TODO: Patron AAA

  it('🔴 Deberia de retornar "invalido" el formulario', () => {
    //TODO: Arrange
    const mockCredential = {
      email: 'esde',
      password: '12345678901234567890',
    };

    const emailForm: any = component.formLogin.get('email');
    const passwordForm: any = component.formLogin.get('password');

    //TODO: Act -> actuar
    emailForm.setValue(mockCredential.email);
    passwordForm.setValue(mockCredential.password);

    //TODO: Assert -> esperar

    expect(component.formLogin.invalid).toEqual(true); //TODO: true o false
    // expect(component.formLogin.invalid).toEqual(false); //TODO: true o false
    // expect(component.formLogin.invalid).toBeTruthy();
  });

  //TODO: Patron AAA > prueba 2

  it('✔✔ Deberia de retornar "valido" el formulario', () => {
    //TODO: Arrange
    const mockCredential = {
      email: 'test@test.com',
      password: '12345678',
    };

    const emailForm: any = component.formLogin.get('email');
    const passwordForm: any = component.formLogin.get('password');

    //TODO: Act -> actuar
    emailForm.setValue(mockCredential.email);
    passwordForm.setValue(mockCredential.password);

    //TODO: Assert -> esperar

    // expect(component.formLogin.invalid).toEqual(true); //TODO: true o false
    expect(component.formLogin.invalid).toEqual(false); //TODO: true o false
    // expect(component.formLogin.invalid).toBeTruthy();
  });

  //TODO: Patron AAA > prueba 3 boton

  it('👍 El boton deberia de tener la palabra "Iniciar sesión"', () => {
    const elementRef = fixture.debugElement.query(
      //TODO: Documento.quereSelector()
      By.css('.form-action button')
    );
    const getInnerText = elementRef.nativeElement.innerText;

    expect(getInnerText).toEqual('Iniciar sesión');
  });
});
