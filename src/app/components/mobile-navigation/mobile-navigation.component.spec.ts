import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNavigationComponent } from './mobile-navigation.component';

describe('MobileNavComponent', () => {
  let component: MobileNavigationComponent;
  let fixture: ComponentFixture<MobileNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileNavigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
