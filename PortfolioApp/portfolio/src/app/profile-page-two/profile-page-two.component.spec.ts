import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageTwoComponent } from './profile-page-two.component';

describe('ProfilePageTwoComponent', () => {
  let component: ProfilePageTwoComponent;
  let fixture: ComponentFixture<ProfilePageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePageTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
