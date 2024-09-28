import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]',
})
export class ImgBrokenDirective {
  @Input() customImg: string = '';
  //TODO: hot HOST HOOST
  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement;
    // Verificar que el elemento sea realmente una imagen
    if (elNative instanceof HTMLImageElement) {
      console.log('Esta Imagen Revento -->', this.elHost);
      // elNative.src = 'https://picsum.photos/200/200';
      // elNative.src = '../../../assets/images/imgerror.jpg';
      elNative.src = this.customImg;
    } else {
      console.error('El elemento no es una imagen:', this.elHost);
    }
  }
  constructor(private elHost: ElementRef) {
    // console.log(this.elHost);
  }
}
