import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGamesPS5LayoutComponent } from './video-games-ps5-layout.component';

describe('VideoGamesPS5LayoutComponent', () => {
  let component: VideoGamesPS5LayoutComponent;
  let fixture: ComponentFixture<VideoGamesPS5LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoGamesPS5LayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoGamesPS5LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
