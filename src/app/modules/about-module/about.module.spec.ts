import { TestBed } from '@angular/core/testing';

import { AboutModule } from './about.module';

describe('AboutModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutModule]
    }).compileComponents();
  });

  it('should create', () => {
    expect(AboutModule).toBeTruthy();
  });
});