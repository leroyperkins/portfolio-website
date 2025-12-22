import { Component, inject, OnInit } from '@angular/core';
import { SeoService } from '../../../services/seo/seo.service';
import { ButtonComponent } from '../../../shared/layout/button/button.component';

@Component({
  selector: 'app-level1-project-details.component',
  templateUrl: './level1-project-details.component.html',
  imports: [ButtonComponent]
})
export class Level1ProjectDetailsComponent implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.updateMetaTags(
      'L1 High Powered Rocket Certification',
      'Created high power L1 rocket to pass Tripoli rocketry certification flight.'
    );
  }
}