import { Component, inject } from '@angular/core';
import { ButtonComponent } from "../../../shared/layout/button/button.component";
import { ResumeService } from '../../../services/resume/resume.service';

@Component({
  selector: 'app-contact',
  imports: [ButtonComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
  export class ContactComponent {
    submit() {
  throw new Error('Method not implemented.');
  }
  private resumeService = inject(ResumeService);
  data = this.resumeService.data;
}
