import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { VideoGamesPS5LayoutComponent } from './video-games-ps5-layout/video-games-ps5-layout.component';

const routes: Routes = [
  {path: '', component: HomeLayoutComponent},
  {path: 'VideoGames-PS5', component: VideoGamesPS5LayoutComponent},
  {path: 'home', component: HomeLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
