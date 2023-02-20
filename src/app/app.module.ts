import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './Navigation/top-nav-bar/top-nav-bar.component';
import { FooterComponent } from './Navigation/footer/footer.component';
import { CardHPOPComponent } from './card-hp-op/card-hp-op.component';
import { CardTopBrandsComponent } from './card-top-brands/card-top-brands.component';
import { CarouselRecommendedProductsComponent } from './carousel-recommended-products/carousel-recommended-products.component';
import { CarouselWeeksTopDealsComponent } from './carousel-weeks-top-deals/carousel-weeks-top-deals.component';
import { CardDeadislandTradeinComponent } from './card-deadisland-tradein/card-deadisland-tradein.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { VerticalCardComponentComponent } from './vertical-card-component/vertical-card-component.component';
import { VideoGamesPS5LayoutComponent } from './video-games-ps5-layout/video-games-ps5-layout.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { PreOwnedPhonesComponent } from './pre-owned-phones/pre-owned-phones.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    FooterComponent,
    CardHPOPComponent,
    CardTopBrandsComponent,
    CarouselRecommendedProductsComponent,
    CarouselWeeksTopDealsComponent,
    CardDeadislandTradeinComponent,
    HeaderTopComponent,
    VerticalCardComponentComponent,
    VideoGamesPS5LayoutComponent,
    HomeLayoutComponent,
    PreOwnedPhonesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
