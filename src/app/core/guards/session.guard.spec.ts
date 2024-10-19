import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { sessionGuard } from './session.guard';

//TODO:🔴🔴 Es el nombre de la prueba "Examen del Session Guard"
describe('sessionGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => sessionGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
