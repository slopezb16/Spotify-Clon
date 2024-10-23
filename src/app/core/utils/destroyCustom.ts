import { DestroyRef, inject } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

/**
 *Nuestro custom takeUntilDestroy
 * @returns
 */
export const destroyCustom = () => {
  const subject = new Subject();

  inject(DestroyRef).onDestroy(() => {
    console.log('Se destruye el componente 🔥');
    subject.next(true);
    subject.complete();
  });

  return <T>() => takeUntil<T>(subject.asObservable());
};
