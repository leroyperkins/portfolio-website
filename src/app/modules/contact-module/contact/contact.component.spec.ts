import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent,
        HttpClientTestingModule,
        RouterTestingModule,
        ToastrModule.forRoot({
          positionClass: 'toast-bottom-right',
          timeOut: 5000,
          progressBar: true,
          progressAnimation: 'increasing',
          preventDuplicates: true,
          toastClass: 'ngx-toastr bg-[var(--color-surface)] text-[var(--color-text)] border border-[var(--color-border)]', // Tailwind integration
          iconClasses: {
            success: 'toast-success text-[var(--color-accent)]',
            error: 'toast-error text-red-500',
            info: 'toast-info text-blue-500',
            warning: 'toast-warning text-yellow-500'
          }
        })
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
