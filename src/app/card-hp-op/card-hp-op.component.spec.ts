import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHPOPComponent } from './card-hp-op.component';

describe('CardHPOPComponent', () => {
  let component: CardHPOPComponent;
  let fixture: ComponentFixture<CardHPOPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHPOPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardHPOPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
