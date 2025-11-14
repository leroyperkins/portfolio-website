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
    // TODO: Implement form submission logic (e.g., via HttpClient to an API)
    console.log('Form submitted!');  // Placeholder
    alert('Message sent successfully!');  // For demo
  }
  private resumeService = inject(ResumeService);
  data = this.resumeService.data;
}
