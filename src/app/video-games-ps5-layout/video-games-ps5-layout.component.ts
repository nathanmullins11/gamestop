import { Component } from '@angular/core';
import { mock_verticalcard_list } from '../mock_verticalcard_list';
import { VerticalCardItemModel } from '../verticalcard-item.model';

@Component({
  selector: 'app-video-games-ps5-layout',
  templateUrl: './video-games-ps5-layout.component.html',
  styleUrls: ['./video-games-ps5-layout.component.css']
})
export class VideoGamesPS5LayoutComponent {
    products: VerticalCardItemModel [] = [];
  
    constructor() {
      for (var product of mock_verticalcard_list) {
        console.log(product);
        this.products.push(product); 
      }
    }
}
