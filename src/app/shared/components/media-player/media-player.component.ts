import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';
import { NgTemplateOutlet, NgIf, NgClass, AsyncPipe } from '@angular/common'; //TODO: Programacion Reactiva

@Component({
    selector: 'app-media-player',
    templateUrl: './media-player.component.html',
    styleUrl: './media-player.component.css',
    standalone: true,
    imports: [
        NgTemplateOutlet,
        NgIf,
        NgClass,
        AsyncPipe,
    ],
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  // mockCover: TrackModel = {
  //   cover:
  //     'https://jenesaispop.com/wp-content/uploads/2009/09/guetta_onelove.jpg',
  //   album: 'David Guetta',
  //   name: 'One Love',
  //   url: 'http://localhost/track.mp3',
  //   _id: '1',
  // };
  // mockCover!: TrackModel;
  listaObserver$: Array<Subscription> = [];
  state: string = 'paused';
  //Progreso barra
  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('');

  constructor(public multimediaService: MultimediaService) {}

  //TODO: primero que se construye
  ngOnInit(): void {
    // //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // //Add 'implements OnInit' to the class.
    // const obsever1$: Subscription = this.multimediaService.callBack.subscribe(
    //   (response: TrackModel) => {
    //     console.log('Recibiendo cancion.. ->', response);
    //   }
    // );
    // // this.listaObserver$.push(obsever1$);
    // this.listaObserver$ = [obsever1$];
    //Ejemplo 2 - Multimedia.Service
    // const observable1$ = this.multimediaService.myObservable1$.subscribe(
    //   (responseOk) => {
    //     //TODO: Next()
    //     console.log('Recibiendo cancion.. ->', responseOk);
    //   },
    //   (responseFail) => {
    //     //TODO: Error()
    //     console.log('Error al recibir cancion.. ->', responseFail);
    //   }
    // );
    //Musica
    // this.multimediaService.trackInfo$.subscribe((responseOk) => {
    //   console.log('Reproducir cancion', responseOk);
    //   this.mockCover = responseOk;
    // });

    //Inicializamos el boton
    const observer1$ = this.multimediaService.playerStatus$.subscribe(
      (status) => (this.state = status)
    );
    this.listaObserver$ = [observer1$];
  }

  //TODO: ultmo que se construye
  ngOnDestroy(): void {
    console.log('😊😊 Ultimo que se destruye');
    this.listaObserver$.forEach((x) => x.unsubscribe());
    console.log('‼️‼️ desuscripcion');
  }

  handlePosition(event: MouseEvent): void {
    const elNative: HTMLElement = this.progressBar.nativeElement;
    const { clientX } = event;
    //Extrar propiedades
    const { x, width } = elNative.getBoundingClientRect();
    const clickX = clientX - x; //TODO: 1050 - x
    const percentageFromX = (clickX * 100) / width;
    console.log(`Click(x): ${percentageFromX}`);
    this.multimediaService.seekAudio(percentageFromX);
  }
}
