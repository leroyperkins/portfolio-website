import { Component, inject, OnInit } from '@angular/core';
import { ResumeService } from '../../../services/resume/resume.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { SeoService } from '../../../services/seo/seo.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects.component',
  imports: [NgFor, NgIf, NgClass, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit{
  private resumeService = inject(ResumeService);
  data = this.resumeService.data;

    private seoService = inject(SeoService);
    ngOnInit(): void {
      this.seoService.updateMetaTags(
        'Projects',
        'Showcasing passionate software projects'
      );
    }
}