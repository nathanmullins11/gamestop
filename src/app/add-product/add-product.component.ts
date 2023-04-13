import { Component, OnInit } from '@angular/core';
import { VerticalCardItemModel } from '../verticalcard-item.model';
import { AddProductService } from '../add-product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})

export class AddProductComponent {


   constructor(private addPhoneService: AddProductService) {

  }

  ngOnInit(): void {
    
  }

  addItem(product: VerticalCardItemModel) {
    console.log("You clicked the button");
    console.log(product);
    this.addPhoneService.addItem(product);
  }

}
