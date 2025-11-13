import { Component, inject } from '@angular/core';
import { ResumeService } from '../../../services/resume.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  private resumeService = inject(ResumeService);
  data = this.resumeService.data;
 }