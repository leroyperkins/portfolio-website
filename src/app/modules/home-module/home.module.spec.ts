import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeModule } from './home.module';

describe('HomeModule', () => {
  let component: HomeModule;
  let fixture: ComponentFixture<HomeModule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
