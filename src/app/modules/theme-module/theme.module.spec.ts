import { TestBed } from '@angular/core/testing';
import { ThemeModule } from './theme.module';

describe('ThemeMod', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeModule]
    }).compileComponents();
  });

  it('should create', () => {
    expect(ThemeModule).toBeTruthy();
  });
});