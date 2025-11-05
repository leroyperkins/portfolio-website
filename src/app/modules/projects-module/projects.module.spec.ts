import { TestBed } from '@angular/core/testing';
import { ProjectsModule } from './projects.module';

describe('ProjectsModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsModule]
    }).compileComponents();
  });

  it('should create', () => {
    expect(ProjectsModule).toBeTruthy();
  });
});