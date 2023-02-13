import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalCardComponentComponent } from './vertical-card-component.component';

describe('VerticalCardComponentComponent', () => {
  let component: VerticalCardComponentComponent;
  let fixture: ComponentFixture<VerticalCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalCardComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerticalCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
