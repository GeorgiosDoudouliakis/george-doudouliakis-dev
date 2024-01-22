import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsListItemComponent } from './projects-list-item.component';

describe('ProjectsListItemComponent', () => {
  let component: ProjectsListItemComponent;
  let fixture: ComponentFixture<ProjectsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsListItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
