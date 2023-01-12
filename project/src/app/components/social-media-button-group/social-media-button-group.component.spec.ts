import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaButtonGroupComponent } from './social-media-button-group.component';

describe('SocialMediaButtonGroupComponent', () => {
  let component: SocialMediaButtonGroupComponent;
  let fixture: ComponentFixture<SocialMediaButtonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediaButtonGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialMediaButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
