import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TestPageComponent } from '@shared/components/Test/test-page/test-page.component';

// definir las rutas
const routes: Routes = [
  // {
  //   path: '', // http://localhost:4200/home/dashboard
  //   // path: 'dashboard', // http://localhost:4200/home/dashboard
  //   component: HomePageComponent,
  // }
  {
    path: 'tracks',
    loadChildren: () =>
      import('@modules/tracks/tracks.module').then((m) => m.TracksModule),
  },
  {
    path: 'favorites',
    loadChildren: () =>
      import('@modules/favorites/favorites.module').then(
        (m) => m.FavoritesModule
      ),
  },
  {
    path: 'history',
    loadChildren: () =>
      import('@modules/history/history.module').then((m) => m.HistoryModule),
  },
  //TODO Test seccion 12
  { path: 'test', component: TestPageComponent },
  {
    path: '**', //TODO 404 cuando no existe la ruta
    redirectTo: '/tracks',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
