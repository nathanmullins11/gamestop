import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselWeeksTopDealsComponent } from './carousel-weeks-top-deals.component';

describe('CarouselWeeksTopDealsComponent', () => {
  let component: CarouselWeeksTopDealsComponent;
  let fixture: ComponentFixture<CarouselWeeksTopDealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselWeeksTopDealsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselWeeksTopDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
