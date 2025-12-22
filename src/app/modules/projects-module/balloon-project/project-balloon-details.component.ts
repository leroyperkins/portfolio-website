import { Component, inject, OnInit } from '@angular/core';
import { SeoService } from '../../../services/seo/seo.service';
import { ButtonComponent } from '../../../shared/layout/button/button.component';

@Component({
  selector: 'app-project-balloon-details.component',
  templateUrl: './project-balloon-details.component.html',
  imports: [ButtonComponent]
})
export class ProjectBalloonDetailsComponent implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.updateMetaTags(
      'High-Altitude Balloon Project',
      'Hands-on project launching a balloon to 75k feet with sensors for data collection, radiation detection, and atmospheric analysis.'
    );
  }
}