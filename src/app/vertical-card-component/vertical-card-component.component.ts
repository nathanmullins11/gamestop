import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vertical-card-component',
  templateUrl: './vertical-card-component.component.html',
  styleUrls: ['./vertical-card-component.component.css']
})
export class VerticalCardComponentComponent {
  @Input() img: string;
  @Input() description: string;
  @Input() price: number;

  constructor() {
    this.img = "";
    this.price = 0;
    this.description = "Missing Discription of product";
  }
}
