import {
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

//TODO Aca no iba iba dentro
// const cookieService = inject(CookieService); // Inyección del servicio de cookies

/**
 * Interceptro Funcional Session add Beared token
 * @param request
 * @param next
 */

export const authorizationInterceptor = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  try {
    const cookieService = inject(CookieService); // Inyección del servicio de cookies
    const token = cookieService.get('token');
    let newRequest = request;
    newRequest = request.clone({
      setHeaders: {
        authorization: 'Bearer ${token}',
        CUSTOM_HEADER: 'HOLA',
      },
    });
    return next(newRequest);
  } catch (e) {
    console.log(' Ojito error', e);
    return next(request);
  }
};

// export const ingectSessionInterceptor: HttpInterceptorFn = (req, next) => {
//   const cookieService = inject(CookieService); // Inyección del servicio de cookies

//   // console.log('Hola interceptors', req);
//   // return next(req);
//   try {
//     // Obtener el token de la cookie
//     const token = cookieService.get('token');

//     // Clonar la solicitud para agregar los encabezados
//     const newRequest = req.clone({
//       setHeaders: {
//         authorization: `Bearer ${token}`, // Agregar el token al encabezado de autorización
//         CUSTOM_HEADER: 'HOLA', // Ejemplo de encabezado personalizado
//       },
//     });
//     // Continuar con la solicitud modificada
//     return next(newRequest);
//   } catch (error) {
//     console.error('Error en el interceptor:', error);
//     return next(req);
//   }
// };
