import { Component, inject } from '@angular/core';
import { ResumeService } from '../../../services/resume/resume.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { SeoService } from '../../../services/seo/seo.service';

@Component({
  selector: 'app-projects.component',
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  private resumeService = inject(ResumeService);
  data = this.resumeService.data;

  handleImageError(event: Event, title: string): void {
    console.error(`PNG load failed for project "${title}". Verify path: ${(event.target as HTMLImageElement).src}`);
  }

    private seoService = inject(SeoService);
    OnInit(): void {
      this.seoService.updateMetaTags(
        'Projects',
        'Showcasing passionate software projects'
      );
    }
}