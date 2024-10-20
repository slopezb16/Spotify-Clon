import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryPageComponent } from './pages/history-page/history-page.component';


@NgModule({
    imports: [
        CommonModule,
        HistoryRoutingModule,
        HistoryPageComponent
    ]
})
export class HistoryModule { }
