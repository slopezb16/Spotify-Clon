import { Component, Input } from '@angular/core';
// import * as dataRaw from '../../../data/track.json'; // Local
import { TrackService } from '@modules/tracks/services/track.service'; // API
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { NgFor, NgTemplateOutlet } from '@angular/common';
import { ImgBrokenDirective } from '@shared/directives/img-broken.directive';
import { OrderListPipe } from '@shared/pipe/order-list.pipe';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrl: './play-list-body.component.css',
  standalone: true,
  imports: [NgFor, NgTemplateOutlet, ImgBrokenDirective, OrderListPipe],
})
export class PlayListBodyComponent {
  @Input() tracks: Array<TrackModel> = [];
  // @Input() tracks: any[] = [];
  optionSort: { property: string | null; order: string } = {
    property: null,
    order: 'asc',
  };
  constructor(
    private trackService: TrackService,
    private multimediaService: MultimediaService // 👈 aquí
  ) {}

  // ngOnInit(): void {
  //   const { data }: any = (dataRaw as any).default;
  //   this.tracks = data;
  // }

  ngOnInit(): void {
    this.loadDataAll();
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
        this.tracks = res;
        console.log('Canciones --> ', res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  changeSort(property: string): void {
    const { order } = this.optionSort;
    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc',
    };
    console.log(this.optionSort);
  }

  // 👉 Método para reproducir
  // sendPlay(track: TrackModel): void {
  //   this.multimediaService.trackInfo$.next(track);
  // }
  sendPlay(track: TrackModel): void {
    this.multimediaService.trackInfoSignal.set(track); // 👈 usa el signal, no el BehaviorSubject
  }
}
