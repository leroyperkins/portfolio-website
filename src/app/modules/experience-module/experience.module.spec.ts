import { TestBed } from '@angular/core/testing';
import { ExperienceModule } from './experience.module';

describe('ExperienceModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceModule]
    }).compileComponents();
  });

  it('should create', () => {
    expect(ExperienceModule).toBeTruthy();
  });
});