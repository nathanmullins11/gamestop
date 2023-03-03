import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-shop-brands',
  templateUrl: './card-shop-brands.component.html',
  styleUrls: ['./card-shop-brands.component.css']
})
export class CardShopBrandsComponent {
    @Input() img: string;
    
    constructor() {
      this.img = "";
    }
  }

