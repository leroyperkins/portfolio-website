import { Component, inject } from '@angular/core';
import { ResumeService } from '../../../services/resume.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-projects.component',
  imports: [NgFor, NgIf],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  private resumeService = inject(ResumeService);
  data = this.resumeService.data;
}
