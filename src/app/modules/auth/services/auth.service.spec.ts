import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import * as mockData from '../../../data/user.json';
import { CookieService } from 'ngx-cookie-service';
import { of } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  let mockUser: any = (mockData as any).default;
  let httpClientSpy: { post: jasmine.Spy };
  let cookieServiceSpy: jasmine.SpyObj<CookieService>; // Creamos un spy para CookieService

  beforeEach(() => {
    // Creamos un spy para el CookieService simulando el método 'set'
    const cookieSpy = jasmine.createSpyObj('CookieService', ['set', 'get']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: CookieService, useValue: cookieSpy }], // Usamos el spy aquí
    });

    //TODO: Creamos un objeto que va a espiar
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);

    cookieServiceSpy = TestBed.inject(
      CookieService
    ) as jasmine.SpyObj<CookieService>;

    // service = TestBed.inject(AuthService); //TODO: No usamos el que trae por defecto instanciamos uno nuevo
    service = new AuthService(httpClientSpy as any, cookieServiceSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //TODO: Prueba del sendCredentials

  it('Debe de retornar un objecto con "data" y "tokenSession"', (done: DoneFn) => {
    //TODO: Arrange

    const user: any = mockUser.userOk;
    const mockResponse = {
      data: {},
      tokenSession: '0x0x0x',
    };

    httpClientSpy.post.and.returnValue(
      of(mockResponse) //TODO: ✔✔✔ ya es observable
    );

    //TODO: Act
    service
      .sendCredentials(user.email, user.password)
      .subscribe((responseApi) => {
        //TODO ['data','tokenSession']
        const getProperties = Object.keys(responseApi);
        expect(getProperties).toContain('data');
        expect(getProperties).toContain('tokenSession');
        done();
      });
  });

  it('TEST de suma de 2 + 3', () => {
    const a = 2;
    const b = 3;

    const c = service.suma(a, b);

    expect(c).toEqual(5);
  });
});
