import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ResumeService } from 'src/app/services/resume/resume.service';

@Component({
  selector: 'app-experience',
  imports: [NgFor],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  private resumeService = inject(ResumeService);
  data = this.resumeService.data;
}
