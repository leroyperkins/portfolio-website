import { TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { AppConfigService } from 'src/app/config/app-config.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('ContactComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ContactComponent,
        RouterTestingModule,
        HttpClientTestingModule,
        ToastrModule.forRoot()
      ],
      providers: [
        AppConfigService
      ]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
