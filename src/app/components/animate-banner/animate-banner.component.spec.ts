import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateBannerComponent } from './animate-banner.component';

describe('AnimateBannerComponent', () => {
  let component: AnimateBannerComponent;
  let fixture: ComponentFixture<AnimateBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimateBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimateBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
