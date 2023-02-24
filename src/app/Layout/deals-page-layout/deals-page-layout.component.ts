import { Component } from '@angular/core';
import { mock_squarecard_list } from 'src/app/Lists/mock_squarecard_list';
import { mock_verticalcard_list } from 'src/app/Lists/mock_verticalcard_list';
import { SquareCardItemModel } from 'src/app/square-card.model';
import { VerticalCardItemModel } from 'src/app/verticalcard-item.model';


@Component({
  selector: 'app-deals-page-layout',
  templateUrl: './deals-page-layout.component.html',
  styleUrls: ['./deals-page-layout.component.css']
})
export class DealsPageLayoutComponent {
  square_card_products: SquareCardItemModel[] = [];
  products: VerticalCardItemModel [] = [];

  constructor() {
  for (var square_card_product of mock_squarecard_list) {
    console.log(square_card_product);
    this.square_card_products.push(square_card_product); 
  }

  
  for (var product of mock_verticalcard_list) {
    console.log(product);
    this.products.push(product); 
  }
  }
}

