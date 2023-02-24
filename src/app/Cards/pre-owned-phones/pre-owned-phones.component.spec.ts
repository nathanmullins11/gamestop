import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreOwnedPhonesComponent } from './pre-owned-phones.component';

describe('PreOwnedPhonesComponent', () => {
  let component: PreOwnedPhonesComponent;
  let fixture: ComponentFixture<PreOwnedPhonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreOwnedPhonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreOwnedPhonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
