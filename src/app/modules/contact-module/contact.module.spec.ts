import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactModule } from './contact.module';

describe('ContactModule', () => {
  let component: ContactModule;
  let fixture: ComponentFixture<ContactModule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
