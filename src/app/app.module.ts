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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
