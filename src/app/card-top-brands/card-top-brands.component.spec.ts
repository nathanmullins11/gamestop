import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTopBrandsComponent } from './card-top-brands.component';

describe('CardTopBrandsComponent', () => {
  let component: CardTopBrandsComponent;
  let fixture: ComponentFixture<CardTopBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTopBrandsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTopBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
