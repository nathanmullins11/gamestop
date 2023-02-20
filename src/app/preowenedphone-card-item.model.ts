export class PreOwnedPhoneCardItemModel {
  img: string;
  price: number;
  description: string;

  constructor(img:string, description:string, price:number) {
    this.img = img;
    this.price = price;
    this.description = description;
  }
}