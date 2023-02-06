import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselRecommendedProductsComponent } from './carousel-recommended-products.component';

describe('CarouselRecommendedProductsComponent', () => {
  let component: CarouselRecommendedProductsComponent;
  let fixture: ComponentFixture<CarouselRecommendedProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselRecommendedProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselRecommendedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
