import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCirclesComponent } from './card-circles.component';

describe('CardCirclesComponent', () => {
  let component: CardCirclesComponent;
  let fixture: ComponentFixture<CardCirclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCirclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCirclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
