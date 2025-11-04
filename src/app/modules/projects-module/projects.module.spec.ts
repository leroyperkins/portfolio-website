import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsModule } from './projects.module';

describe('ProjectsModule', () => {
  let component: ProjectsModule;
  let fixture: ComponentFixture<ProjectsModule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
