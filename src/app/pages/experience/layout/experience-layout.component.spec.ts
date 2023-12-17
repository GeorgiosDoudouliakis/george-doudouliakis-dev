import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceLayoutComponent } from './experience-layout.component';

describe('ExperienceLayoutComponent', () => {
  let component: ExperienceLayoutComponent;
  let fixture: ComponentFixture<ExperienceLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExperienceLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
