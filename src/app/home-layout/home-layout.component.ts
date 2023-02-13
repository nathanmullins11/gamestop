import { Component } from '@angular/core';
import { mock_verticalcard_list } from '../mock_verticalcard_list';
import { VerticalCardItemModel } from '../verticalcard-item.model';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent {
  products: VerticalCardItemModel [] = [];

  constructor() {
    for (var product of mock_verticalcard_list) {
      console.log(product);
      this.products.push(product); 
    }
  }
}
