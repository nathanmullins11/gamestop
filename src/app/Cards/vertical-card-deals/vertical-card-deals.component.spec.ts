import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalCardDealsComponent } from './vertical-card-deals.component';

describe('VerticalCardDealsComponent', () => {
  let component: VerticalCardDealsComponent;
  let fixture: ComponentFixture<VerticalCardDealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalCardDealsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerticalCardDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
