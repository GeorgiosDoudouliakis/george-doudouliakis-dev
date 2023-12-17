import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonMobileNavigationComponent } from './non-mobile-navigation.component';

describe('NavComponent', () => {
  let component: NonMobileNavigationComponent;
  let fixture: ComponentFixture<NonMobileNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonMobileNavigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonMobileNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
