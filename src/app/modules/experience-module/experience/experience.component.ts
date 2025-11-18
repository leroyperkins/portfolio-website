import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ResumeService } from '../../../services/resume/resume.service';
import { SeoService } from '../../../services/seo/seo.service';

@Component({
  selector: 'app-experience',
  imports: [NgFor],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  private resumeService = inject(ResumeService);
  
  data = this.resumeService.data;
  
  
  private seoService = inject(SeoService);
  OnInit(): void {
    this.seoService.updateMetaTags(
      'Experience',
      'Most recent/relevant experience'
    );
  }
}
