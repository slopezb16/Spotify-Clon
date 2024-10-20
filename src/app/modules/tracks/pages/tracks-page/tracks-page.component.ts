import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
// import * as dataRaw from '../../../../data/track.json';
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
    // const observer1$ = this.trackService.dataTracksTrending$.subscribe(
    //   (response) => {
    //     this.tracksTrending = response;
    //     this.tracksRandom = response;
    //     console.log('Canciones --> ', response);
    //   }
    // );
    // const observer2$ = this.trackService.dataTracksRandom$.subscribe(
    //   (response) => {
    //     this.tracksRandom = [...this.tracksRandom, ...response];
    //     console.log('Cancion rando entrando..👌--> ', response);
    //   }
    // );
    // this.listObsevers$ = [observer1$, observer2$];
    //Esta sacando erro por el httpcliente de tracksService
    // this.trackService.getAllTrack$().subscribe((response) => {
    //   // this.tracksTrending = response;
    //   // this.tracksRandom = response;
    //   console.log('Canciones --> ', response);
    // });
    // this.trackService.getAllTracks$().subscribe((response) => {
    //   this.tracksTrending = response;
    //   // this.tracksRandom = response;
    //   console.log('Canciones --> ', response);
    // });
    // this.trackService.getAllRandom$().subscribe((response) => {
    //   this.tracksRandom = response;
    //   console.log('Canciones rampn --> ', response);
    // });
    this.loadDataAll();
    this.loadDataRamdom();
  }

  loadDataAll(): void {
    // this.trackService.getAllTracks$().subscribe((response: TrackModel[]) => {
    //   this.tracksTrending = response;
    //   console.log('Canciones rampn --> ', response);
    // });
    this.trackService
      .getAllTracks$()
      .toPromise()
      .then((res) => {
        this.tracksTrending = res;
        console.log('Canciones --> ', res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  //asincrono
  async loadDataAll_(): Promise<any> {
    const dataRaw = await this.trackService.getAllTracks$().toPromise();
    this.tracksTrending = dataRaw;
    console.log('Canciones --> ', dataRaw);
  }

  loadDataRamdom(): void {
    this.trackService.getAllRandom$().subscribe(
      (response: TrackModel[]) => {
        this.tracksRandom = response;
        console.log('Canciones rampn --> ', response);
      },
      (err) => {
        console.error(err);
      }
    );
  }

  ngOnDestroy(): void {
    // this.listObsevers$.forEach((x) => x.unsubscribe());
  }
}
