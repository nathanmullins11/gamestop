import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsTwoDealsComponent } from './cards-two-deals.component';

describe('CardsTwoDealsComponent', () => {
  let component: CardsTwoDealsComponent;
  let fixture: ComponentFixture<CardsTwoDealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsTwoDealsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsTwoDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
