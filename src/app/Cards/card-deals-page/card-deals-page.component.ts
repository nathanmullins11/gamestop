import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-deals-page',
  templateUrl: './card-deals-page.component.html',
  styleUrls: ['./card-deals-page.component.css']
})
export class CardDealsPageComponent {
  @Input() img: string;
    
    constructor() {
      this.img = "";
    }
}
