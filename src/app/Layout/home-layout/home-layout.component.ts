import { Component } from '@angular/core';
import { mock_preownedphonecard_list } from '../../Lists/mock_preownedphone_list';
import { mock_verticalcard_list } from '../../Lists/mock_verticalcard_list';
import { mock_widecard_list } from '../../Lists/mock_widecard_list';
import { PreOwnedPhoneCardItemModel } from '../../preowenedphone-card-item.model';
import { VerticalCardItemModel } from '../../verticalcard-item.model';
import { WideCardItemModel } from '../../widecard-item.model';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent {
  products: VerticalCardItemModel [] = [];
  wide_card_products: WideCardItemModel [] = [];
  preowned_card_products: PreOwnedPhoneCardItemModel[] = [];

  constructor() {
    // vertical cards on side page video games
    for (var product of mock_verticalcard_list) {
      console.log(product);
      this.products.push(product); 
    }

    // wide cards 1
    for (var wide_card_product of mock_widecard_list) {
      console.log(wide_card_product);
      this.wide_card_products.push(wide_card_product); 
    }

    for (var preowned_card_product of mock_preownedphonecard_list) {
      console.log(preowned_card_product);
      this.preowned_card_products.push(preowned_card_product); 
    }
  }

  
}
