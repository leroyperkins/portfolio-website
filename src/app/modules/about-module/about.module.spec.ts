import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutModule } from './about.module';

describe('AboutModule', () => {
  let component: AboutModule;
  let fixture: ComponentFixture<AboutModule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
