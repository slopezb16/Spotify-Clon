import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { catchError, map, mergeMap, Observable, of, tap } from 'rxjs';
// import * as dataRaw from '../../../data/track.json';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TrackService {
  //TODO > A las variables observables se les suele poner un $ al final
  //https://www.learnrxjs.io/
  // dataTracksTrending$: Observable<TrackModel[]> = of([]);
  //TODO > a los observables hay que suscribirse . Si no no se tiene la data

  // dataTracksRandom$: Observable<TrackModel[]> = of([]);

  //api
  private readonly URL = environment.api;

  constructor(private http: HttpClient) {
    // const { data }: any = (dataRaw as any).default;
    // this.dataTracksTrending$ = of(data);
    //
    // this.dataTracksRandom$ = new Observable((observer) => {
    //   //TODO > nuevo elemento como si fuera dinamico
    //   const trackExample: TrackModel = {
    //     _id: 9,
    //     name: 'Leve',
    //     album: 'Cartel de Santa',
    //     url: 'http://',
    //     cover:
    //       'https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/889853882823.jpg',
    //   };
    //   observer.next([trackExample]);
    //   // setTimeout(() => {
    //   //   observer.next([trackExample]);
    //   // }, 3000);
    // });
  }

  /**
   *
   */
  private skipById(
    listTracks: TrackModel[],
    id: Number
  ): Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const listTmp = listTracks.filter((x) => x._id !== id);
      resolve(listTmp);
    });
  }

  /**
   *TODO: {Data:[dato1,dato2]}
   *
   * @returns
   */
  getAllTracks$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`).pipe(
      map(({ data }: any) => {
        return data;
      })
    );
  }

  /**
   *
   * @returns Devolver canciones Random
   */
  getAllRandom$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`).pipe(
      // return this.http.get(`${this.URL}/tracks_`).pipe(
      mergeMap(({ data }: any) => this.skipById(data, 2)),
      // map((response: any) => {
      //   const dataRevertida = response.data.reverse(); // Invertir la data
      //   return dataRevertida;
      // })
      // map((dataRevertida: TrackModel[]) => {
      //   // Aplicar filtro para remover el track con _id === 1
      //   return dataRevertida.filter((track: TrackModel) => track._id !== 1);
      // })
      tap((data) => console.log('Ok', data)),
      catchError((err) => {
        const { status, statusText } = err;
        console.log('Error catch', [status, statusText]);
        return of([]);
      })
    );
  }
}
