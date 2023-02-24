import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDeadislandTradeinComponent } from './card-deadisland-tradein.component';

describe('CardDeadislandTradeinComponent', () => {
  let component: CardDeadislandTradeinComponent;
  let fixture: ComponentFixture<CardDeadislandTradeinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDeadislandTradeinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDeadislandTradeinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
