import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';


@NgModule({
    imports: [CommonModule, FavoritesRoutingModule, FavoritesPageComponent],
})
export class FavoritesModule {}
