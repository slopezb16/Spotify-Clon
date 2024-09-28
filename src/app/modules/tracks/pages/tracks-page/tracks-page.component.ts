import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import * as dataRaw from '../../../../data/track.json';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css',
})
export class TracksPageComponent implements OnInit, OnDestroy {
  tracksTrending: Array<TrackModel> = [];
  tracksRandom: Array<TrackModel> = [];

  listObsevers$: Array<Subscription> = [];

  constructor(private trackService: TrackService) {}

  ngOnInit(): void {
    // const { data }: any = (dataRaw as any).default;
    // // console.log(data);
    // this.mockTracksList = data;
    //TODO: vamos a cambiar lo de arriba por un servicio

    const observer1$ = this.trackService.dataTracksTrending$.subscribe(
      (response) => {
        this.tracksTrending = response;
        this.tracksRandom = response;
        console.log('Canciones --> ', response);
      }
    );

    const observer2$ = this.trackService.dataTracksRandom$.subscribe(
      (response) => {
        this.tracksRandom = [...this.tracksRandom, ...response];
        console.log('Cancion rando entrando..👌--> ', response);
      }
    );

    this.listObsevers$ = [observer1$, observer2$];
  }

  ngOnDestroy(): void {
    this.listObsevers$.forEach((x) => x.unsubscribe());
  }
}
