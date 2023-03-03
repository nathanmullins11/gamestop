import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-circles',
  templateUrl: './card-circles.component.html',
  styleUrls: ['./card-circles.component.css']
})
export class CardCirclesComponent {
  @Input() img: string;
  @Input() description: string;
  

  constructor() {
    this.img = "";
    this.description = "Missing Discription of product";
  }
}
