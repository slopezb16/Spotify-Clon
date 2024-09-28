import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import * as dataRaw from '../../../data/track.json';

@Injectable({
  providedIn: 'root',
})
export class TrackService {
  //TODO > A las variables observables se les suele poner un $ al final
  //https://www.learnrxjs.io/
  dataTracksTrending$: Observable<TrackModel[]> = of([]);
  //TODO > a los observables hay que suscribirse . Si no no se tiene la data

  dataTracksRandom$: Observable<TrackModel[]> = of([]);

  constructor() {
    const { data }: any = (dataRaw as any).default;
    this.dataTracksTrending$ = of(data);

    //
    this.dataTracksRandom$ = new Observable((observer) => {
      //TODO > nuevo elemento como si fuera dinamico
      const trackExample: TrackModel = {
        _id: 9,
        name: 'Leve',
        album: 'Cartel de Santa',
        url: 'http://',
        cover:
          'https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/889853882823.jpg',
      };

      observer.next([trackExample]);
      // setTimeout(() => {
      //   observer.next([trackExample]);
      // }, 3000);
    });
  }
}
