import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const sessionGuardFunctional = (): boolean => {
  const cookieService = inject(CookieService);
  const router = inject(Router);

  const token: boolean = cookieService.check('token');

  if (!token) {
    // Redirect to the auth page if no token is found
    router.navigate(['/', 'auth']);
    return false;
  }

  return true; // Token exists, allow navigation
};
