import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square-card',
  templateUrl: './square-card.component.html',
  styleUrls: ['./square-card.component.css']
})
export class SquareCardComponent {
  @Input() img: string;
  @Input() description1: string;
  @Input() description2: string;

  constructor() {
    this.img = "";
    this.description1 = "fisrt description";
    this.description2 = "Missing Discription of product";
  }
}
