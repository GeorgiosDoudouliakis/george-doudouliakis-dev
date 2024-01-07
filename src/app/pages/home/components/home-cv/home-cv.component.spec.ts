import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCvComponent } from './home-cv.component';

describe('HomeCvComponent', () => {
  let component: HomeCvComponent;
  let fixture: ComponentFixture<HomeCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
