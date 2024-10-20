import { Component } from '@angular/core';
import * as dataRaw from '../../../data/track.json';
import { TrackModel } from '@core/models/tracks.model';
import { NgFor, NgTemplateOutlet } from '@angular/common';
import { ImgBrokenDirective } from '../../directives/img-broken.directive';
import { OrderListPipe } from '../../pipe/order-list.pipe';

@Component({
    selector: 'app-play-list-body',
    templateUrl: './play-list-body.component.html',
    styleUrl: './play-list-body.component.css',
    standalone: true,
    imports: [
        NgFor,
        NgTemplateOutlet,
        ImgBrokenDirective,
        OrderListPipe,
    ],
})
export class PlayListBodyComponent {
  tracks: Array<TrackModel> = [];
  optionSort: { property: string | null; order: string } = {
    property: null,
    order: 'asc',
  };

  ngOnInit(): void {
    const { data }: any = (dataRaw as any).default;
    this.tracks = data;
  }

  changeSort(property: string): void {
    const { order } = this.optionSort;
    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc',
    };
    console.log(this.optionSort);
  }
}
