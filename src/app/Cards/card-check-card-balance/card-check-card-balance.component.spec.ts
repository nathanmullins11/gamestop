import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCheckCardBalanceComponent } from './card-check-card-balance.component';

describe('CardCheckCardBalanceComponent', () => {
  let component: CardCheckCardBalanceComponent;
  let fixture: ComponentFixture<CardCheckCardBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCheckCardBalanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCheckCardBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
