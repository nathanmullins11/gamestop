import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vertical-card-deals',
  templateUrl: './vertical-card-deals.component.html',
  styleUrls: ['./vertical-card-deals.component.css']
})
export class VerticalCardDealsComponent {
  @Input() img: string;
  @Input() description: string;
  @Input() price: number;
  

  constructor() {
    this.img = "";
    this.description = "Missing Discription of product";
    this.price = 0;
  }
}
