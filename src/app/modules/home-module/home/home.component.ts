import { Component, inject } from '@angular/core';
import { ResumeService } from '../../../services/resume/resume.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home.component',
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private resumeService = inject(ResumeService);
  data = this.resumeService.data;
}
