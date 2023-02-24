import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pre-owned-phones',
  templateUrl: './pre-owned-phones.component.html',
  styleUrls: ['./pre-owned-phones.component.css']
})
export class PreOwnedPhonesComponent {
  @Input() img: string;
  @Input() price: number;
  @Input() description: string;
  

  constructor() {
    this.img = "";
    this.price = 0;
    this.description = "Missing Discription of product";
  }
}
