import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactModule } from './contact.module';
import { RouterTestingModule } from '@angular/router/testing';

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