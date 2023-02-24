import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsPageLayoutComponent } from './deals-page-layout.component';

describe('DealsPageLayoutComponent', () => {
  let component: DealsPageLayoutComponent;
  let fixture: ComponentFixture<DealsPageLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealsPageLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealsPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
