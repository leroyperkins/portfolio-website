import { Component, inject } from '@angular/core';
import { ResumeService } from '../../../services/resume.service';
import { ButtonComponent } from "../../../shared/layout/button/button.component";
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-home.component',
  imports: [ButtonComponent, NgFor, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private resumeService = inject(ResumeService);
  data = this.resumeService.data;
}
