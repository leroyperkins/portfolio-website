import { Component, inject } from '@angular/core';
import { ResumeService } from '../../../services/resume/resume.service';
import { NgFor } from '@angular/common';
import { SeoService } from 'src/app/services/seo/seo.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  private resumeService = inject(ResumeService);
  private seoService = inject(SeoService);
  
  data = this.resumeService.data;

  OnInit(): void {
    this.seoService.updateMetaTags(
      'About',
      'Technical arsenal, languages, frameworks, and various expertise.'
    );
  }
 }