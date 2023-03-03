import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardShopBrandsComponent } from './card-shop-brands.component';

describe('CardShopBrandsComponent', () => {
  let component: CardShopBrandsComponent;
  let fixture: ComponentFixture<CardShopBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardShopBrandsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardShopBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
