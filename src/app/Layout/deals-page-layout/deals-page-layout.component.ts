import { Component } from '@angular/core';
import { CardDealsPageComponent } from 'src/app/cardgiftcard.model';
import { CircleCardItemModel } from 'src/app/circle-card.model';
import { mock_circlecard_list } from 'src/app/Lists/mock_circlecard_list';
import { mock_squarecard_list } from 'src/app/Lists/mock_squarecard_list';
import { mock_twocardsdealspage_list } from 'src/app/Lists/mock_two-cards-deals-page_list';
import { mock_verticalcard_deals_list } from 'src/app/Lists/mock_verticalcard_deals_list';
import { mock_verticalcard_list } from 'src/app/Lists/mock_verticalcard_list';
import { SquareCardItemModel } from 'src/app/square-card.model';
import { VerticalCardDealsItemModel } from 'src/app/verticalcard-deals.model';
import { VerticalCardItemModel } from 'src/app/verticalcard-item.model';


@Component({
  selector: 'app-deals-page-layout',
  templateUrl: './deals-page-layout.component.html',
  styleUrls: ['./deals-page-layout.component.css']
})
export class DealsPageLayoutComponent {
  square_card_products: SquareCardItemModel[] = [];
  products: VerticalCardItemModel [] = [];
  vertical_card_deals_products: VerticalCardDealsItemModel [] = [];
  two_cards_deals_products: CardDealsPageComponent [] = [];
  circlecard_products: CircleCardItemModel [] = [];

  constructor() {
  for (var square_card_product of mock_squarecard_list) {
    console.log(square_card_product);
    this.square_card_products.push(square_card_product); 
  }

  
  for (var product of mock_verticalcard_list) {
    console.log(product);
    this.products.push(product); 
  }

  for (var product of mock_verticalcard_deals_list) {
    console.log(product);
    this.vertical_card_deals_products.push(product); 
  }

  for (var productduh of mock_twocardsdealspage_list) {
    console.log(productduh);
    this.two_cards_deals_products.push(productduh); 
  }

  for (var circle_product of mock_circlecard_list) {
    console.log(circle_product);
    this.circlecard_products.push(circle_product); 
  }
  }
}

