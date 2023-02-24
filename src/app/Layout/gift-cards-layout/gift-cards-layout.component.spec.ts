import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftCardsLayoutComponent } from './gift-cards-layout.component';

describe('GiftCardsLayoutComponent', () => {
  let component: GiftCardsLayoutComponent;
  let fixture: ComponentFixture<GiftCardsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftCardsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftCardsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
