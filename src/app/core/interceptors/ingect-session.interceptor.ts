import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

export const ingectSessionInterceptor: HttpInterceptorFn = (req, next) => {
  const cookieService = inject(CookieService); // Inyección del servicio de cookies

  // console.log('Hola interceptors', req);
  // return next(req);
  try {
    // Obtener el token de la cookie
    const token = cookieService.get('token');

    // Clonar la solicitud para agregar los encabezados
    const newRequest = req.clone({
      setHeaders: {
        authorization: `Bearer ${token}`, // Agregar el token al encabezado de autorización
        CUSTOM_HEADER: 'HOLA', // Ejemplo de encabezado personalizado
      },
    });
    // Continuar con la solicitud modificada
    return next(newRequest);
  } catch (error) {
    console.error('Error en el interceptor:', error);
    return next(req);
  }
};
