import { TestBed } from '@angular/core/testing';
import { ContactModule } from './contact.module';

describe('ContactModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactModule]
    }).compileComponents();
  });

  it('should create', () => {
    expect(ContactModule).toBeTruthy();
  });
});