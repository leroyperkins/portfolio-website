import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ResumeService } from '../../../services/resume.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  private resumeService = inject(ResumeService);
  data = this.resumeService.data;
 }