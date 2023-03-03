import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDealsPageComponent } from './card-deals-page.component';

describe('CardDealsPageComponent', () => {
  let component: CardDealsPageComponent;
  let fixture: ComponentFixture<CardDealsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDealsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDealsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
