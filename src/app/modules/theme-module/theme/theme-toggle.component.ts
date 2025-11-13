import { Component, inject } from '@angular/core';
import { ThemeService } from '../../../services/theme/theme.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.css',
  imports: [NgIf]
})
export class ThemeToggleComponent {
  themeService = inject(ThemeService);
}