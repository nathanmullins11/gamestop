import { Component } from '@angular/core';
import { CardDealsPageComponent } from 'src/app/Cards/card-deals-page/card-deals-page.component';
import { CardShopBrandsItemModel } from 'src/app/cardshop-brands.model';
import { mock_cardgiftcardpage_list } from 'src/app/Lists/mock_card-giftcard-page_list';
import { mock_shopbrandcard2_list } from 'src/app/Lists/mock_shopbrandcard2_list';
import { mock_shopbrandcard_list } from 'src/app/Lists/mock_shopbrandcard_list';

@Component({
  selector: 'app-gift-cards-layout',
  templateUrl: './gift-cards-layout.component.html',
  styleUrls: ['./gift-cards-layout.component.css']
})
export class GiftCardsLayoutComponent {
    cardshop_brands_products: CardShopBrandsItemModel [] = [];
    products: CardShopBrandsItemModel [] = [];
    carddeals_products: CardDealsPageComponent [] = [];

    constructor() {
      for (var product of mock_shopbrandcard_list) {
        console.log(product);
        this.cardshop_brands_products.push(product); 
      }

      for (var product of mock_shopbrandcard2_list) {
        console.log(product);
        this.products.push(product); 
      }

      for (var product of mock_cardgiftcardpage_list) {
        console.log(product);
        this.carddeals_products.push(product); 
      }
    }
  }
