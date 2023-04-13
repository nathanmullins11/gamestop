import { Component, Injectable, OnInit } from '@angular/core';
import { VerticalCardItemModel } from './verticalcard-item.model';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable(
  {providedIn: 'root'}
)

export class AddProductService {

  constructor(private db:AngularFireDatabase) {
 

  }


  
  addItem(product:VerticalCardItemModel){
    // console.log("You Clicked the button");
    // console.log(product);
    this.db.list<VerticalCardItemModel>("Phones").push(product);
    
  }
}
