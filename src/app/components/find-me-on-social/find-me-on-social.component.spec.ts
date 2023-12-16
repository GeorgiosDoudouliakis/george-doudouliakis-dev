import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMeOnSocialComponent } from './find-me-on-social.component';

describe('FindMeOnSocialComponent', () => {
  let component: FindMeOnSocialComponent;
  let fixture: ComponentFixture<FindMeOnSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindMeOnSocialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindMeOnSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
