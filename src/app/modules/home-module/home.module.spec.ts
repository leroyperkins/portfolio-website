import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeModule } from './home.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeModule]
    }).compileComponents();
  });

  it('should create', () => {
    expect(HomeModule).toBeTruthy();
  });
});