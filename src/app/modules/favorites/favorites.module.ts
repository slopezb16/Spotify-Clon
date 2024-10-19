import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [FavoritesPageComponent],
  imports: [CommonModule, FavoritesRoutingModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Agregar esta línea
})
export class FavoritesModule {}
