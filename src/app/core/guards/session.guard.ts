import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const sessionGuard: CanActivateFn = (route, state) => {
  // return true; //TODO: token, Roles, etc
  const cookieService = inject(CookieService);
  const router = inject(Router);

  // Check if the token exists
  const token: boolean = cookieService.check('token');

  if (!token) {
    // Redirect to the auth page if no token is found
    router.navigate(['/', 'auth']);
    return false;
  }

  return true; // Token exists, allow navigation
};
