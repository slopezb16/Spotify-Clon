import { Component, Input } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { NgClass, NgFor } from '@angular/common';
import { CardPlayerComponent } from '../card-player/card-player.component';

@Component({
    selector: 'app-section-generic',
    templateUrl: './section-generic.component.html',
    styleUrl: './section-generic.component.css',
    standalone: true,
    imports: [
        NgClass,
        NgFor,
        CardPlayerComponent,
    ],
})
export class SectionGenericComponent {
  @Input() title: string = '';
  @Input() mode: 'small' | 'big' = 'big';
  @Input() dataTracks: Array<TrackModel> = []; //TrackModel
}
