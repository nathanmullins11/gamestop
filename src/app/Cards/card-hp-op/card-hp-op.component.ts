import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-hp-op',
  templateUrl: './card-hp-op.component.html',
  styleUrls: ['./card-hp-op.component.css']
})
export class CardHPOPComponent {
  @Input() img: string;
  @Input() header: string;
  @Input() description: string;

  constructor() {
    this.img = "";
    this.header = "";
    this.description = "Missing Discription of product";
  }
}
