import { inject, Injectable, Injector } from '@angular/core';
import { RESUME_DATA, ResumeData } from '../../data/resume.data';
import { ThemeService } from '../theme/theme.service';

@Injectable({ providedIn: 'root' })
export class ResumeService {
  private injector = inject(Injector);
  private lazyOtherService: ThemeService | null = null;
  getLazyOtherService() {
    if (!this.lazyOtherService) {
      this.lazyOtherService = this.injector.get(ThemeService);
    }
    return this.lazyOtherService;
  }
  readonly data: ResumeData = RESUME_DATA;
}