import { Component, inject } from '@angular/core';
import { ThemeService } from '../../../services/theme/theme.service';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.css',
  imports: [NgIf, CommonModule]
})
export class ThemeToggleComponent {
  themeService = inject(ThemeService);

  toggleTheme(): void {
    if (this.themeService) {
      this.themeService.toggle();
    } else {
      console.warn('ThemeService not available');
    }
  }
}