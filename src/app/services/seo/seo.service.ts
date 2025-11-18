import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);

  updateMetaTags(title: string, description: string, keywords = 'angular, typescript, tailwind, portfolio, developer') {
    this.title.setTitle(`${title} | Carson Turner | SWE`);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'keywords', content: keywords });
    this.meta.updateTag({ property: 'og:title', content: `${title} | Carson Turner | SWE` });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: window.location.href });
    this.meta.updateTag({ property: 'og:image', content: 'https://carsonturner.dev/assets/preview.jpg' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
  }
}