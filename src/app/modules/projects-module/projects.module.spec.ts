import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsModule } from './projects.module';
import { RouterTestingModule } from '@angular/router/testing';

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