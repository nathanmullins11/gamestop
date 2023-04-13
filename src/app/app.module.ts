import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './Navigation/top-nav-bar/top-nav-bar.component';
import { FooterComponent } from './Navigation/footer/footer.component';
import { CardHPOPComponent } from './Cards/card-hp-op/card-hp-op.component';
import { CardTopBrandsComponent } from './Cards/card-top-brands/card-top-brands.component';
import { CarouselWeeksTopDealsComponent } from './carousel-weeks-top-deals/carousel-weeks-top-deals.component';
import { CardDeadislandTradeinComponent } from './Cards/card-deadisland-tradein/card-deadisland-tradein.component';
import { HeaderTopComponent } from './Navigation/header-top/header-top.component';
import { VerticalCardComponentComponent } from './Cards/vertical-card-component/vertical-card-component.component';
import { VideoGamesPS5LayoutComponent } from './Layout/video-games-ps5-layout/video-games-ps5-layout.component';
import { HomeLayoutComponent } from './Layout/home-layout/home-layout.component';
import { PreOwnedPhonesComponent } from './Cards/pre-owned-phones/pre-owned-phones.component';
import { CartPageLayoutComponent } from './Layout/cart-page-layout/cart-page-layout.component';
import { SignInLayoutComponent } from './Layout/sign-in-layout/sign-in-layout.component';
import { DealsPageLayoutComponent } from './Layout/deals-page-layout/deals-page-layout.component';
import { SquareCardComponent } from './Cards/square-card/square-card.component';
import { GiftCardsLayoutComponent } from './Layout/gift-cards-layout/gift-cards-layout.component';
import { CardShopBrandsComponent } from './Cards/card-shop-brands/card-shop-brands.component';
import { CardDealsPageComponent } from './Cards/card-deals-page/card-deals-page.component';
import { CardCheckCardBalanceComponent } from './Cards/card-check-card-balance/card-check-card-balance.component';
import { VerticalCardDealsComponent } from './Cards/vertical-card-deals/vertical-card-deals.component';
import { CardCirclesComponent } from './Cards/card-circles/card-circles.component';
import { CardsTwoDealsComponent } from './Cards/cards-two-deals/cards-two-deals.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './Backend/user-info/user-info.component';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';

 import { AngularFireModule } from '@angular/fire/compat';
//import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AddProductComponent } from './add-product/add-product.component';
 //import { AddProductService } from './add-product.service';
//import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    FooterComponent,
    CardHPOPComponent,
    CardTopBrandsComponent,
    CarouselWeeksTopDealsComponent,
    CardDeadislandTradeinComponent,
    HeaderTopComponent,
    VerticalCardComponentComponent,
    VideoGamesPS5LayoutComponent,
    HomeLayoutComponent,
    PreOwnedPhonesComponent,
    CartPageLayoutComponent,
    SignInLayoutComponent,
    DealsPageLayoutComponent,
    SquareCardComponent,
    GiftCardsLayoutComponent,
    CardShopBrandsComponent,
    CardDealsPageComponent,
    CardCheckCardBalanceComponent,
    VerticalCardDealsComponent,
    CardCirclesComponent,
    CardsTwoDealsComponent,
    UserInfoComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
   // AngularFirestoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
