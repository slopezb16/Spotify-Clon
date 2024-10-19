import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]',
})
export class ImgBrokenDirective {
  @Input() customImg: string = '';
  // @Input() customImg: string | boolean = false;
  //TODO: hot HOST HOOST
  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement;
    // Verificar que el elemento sea realmente una imagen
    if (elNative instanceof HTMLImageElement) {
      console.log('Esta Imagen Revento -->', this.elHost);
      // elNative.src = 'https://picsum.photos/200/200';
      // elNative.src = '../../../assets/images/imgerror.jpg';
      // if (this.customImg) {
      //   elNative.src = this.customImg;
      // } else {
      //   elNative.src = 'this.customImg';
      // }
      // Si customImg tiene un valor (no es una cadena vacía), se usa ese valor
      if (this.customImg && typeof this.customImg === 'string') {
        elNative.src = this.customImg;
      } else {
        // Imagen de respaldo si customImg es vacío
        // elNative.src = '../../../assets/images/imgerror.jpg';
        elNative.src = '';
      }
    } else {
      console.error('El elemento no es una imagen:', this.elHost);
    }
  }
  constructor(private elHost: ElementRef) {
    // console.log(this.elHost);
  }
}
