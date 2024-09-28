import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs'; //TODO: Programacion Reactiva

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css',
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  mockCover: TrackModel = {
    cover:
      'https://jenesaispop.com/wp-content/uploads/2009/09/guetta_onelove.jpg',
    album: 'David Guetta',
    name: 'One Love',
    url: 'http://localhost/track.mp3',
    _id: '1',
  };

  listaObserver$: Array<Subscription> = [];

  constructor(private multimediaService: MultimediaService) {}

  //TODO: primero que se construye
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const obsever1$: Subscription = this.multimediaService.callBack.subscribe(
      (response: TrackModel) => {
        console.log('Recibiendo cancion.. ->', response);
      }
    );
    // this.listaObserver$.push(obsever1$);
    this.listaObserver$ = [obsever1$];
  }

  //TODO: ultmo que se construye
  ngOnDestroy(): void {
    console.log('😊😊 Ultimo que se destruye');
    this.listaObserver$.forEach((x) => x.unsubscribe());
    console.log('‼️‼️ desuscripcion');
  }
}
