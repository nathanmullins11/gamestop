import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageLayoutComponent } from './Layout/cart-page-layout/cart-page-layout.component';
import { DealsPageLayoutComponent } from './Layout/deals-page-layout/deals-page-layout.component';
import { GiftCardsLayoutComponent } from './Layout/gift-cards-layout/gift-cards-layout.component';
import { HomeLayoutComponent } from './Layout/home-layout/home-layout.component';
import { SignInLayoutComponent } from './Layout/sign-in-layout/sign-in-layout.component';
import { VideoGamesPS5LayoutComponent } from './Layout/video-games-ps5-layout/video-games-ps5-layout.component';

const routes: Routes = [
  {path: '', component: HomeLayoutComponent},
  {path: 'VideoGames-PS5', component: VideoGamesPS5LayoutComponent},
  {path: 'cart', component: CartPageLayoutComponent},
  {path: 'sign-in', component: SignInLayoutComponent},
  {path: 'Deals', component: DealsPageLayoutComponent},
  {path: 'giftcards', component: GiftCardsLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
