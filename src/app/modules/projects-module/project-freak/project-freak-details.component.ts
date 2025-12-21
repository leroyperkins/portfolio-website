import { Component, inject, OnInit } from '@angular/core';
import { SeoService } from '../../../services/seo/seo.service';
import { ButtonComponent } from '../../../shared/layout/button/button.component';

@Component({
  selector: 'app-project-freak-detail',
  templateUrl: './project-freak-details.html',
  imports: [ButtonComponent]
})
export class ProjectFreakDetailComponent implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.updateMetaTags(
      'Project FREAK: Field-Ready Rocket Evaluation and Analytics Kit',
      'Detailed overview of the FREAK project for Mizzou Space Program, including automation of rocket motor testing, real-time data analysis, and impacts on safety and efficiency.'
    );
  }
}