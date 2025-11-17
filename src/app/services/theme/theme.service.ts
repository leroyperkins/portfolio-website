import { inject, Injectable, signal } from '@angular/core';
import { effect } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private document = inject(DOCUMENT);
  private html = this.document.documentElement;

  isDark = signal<boolean>(false);

  constructor() {
    this.init();

    effect(() => {
      const dark = this.isDark();
      if (dark) {
        this.html.classList.add('dark');
      } else {
        this.html.classList.remove('dark');
      }
    });
  }

  init(): void {
    const saved = localStorage.getItem('theme');
    if (saved) {
      this.isDark.set(saved === 'dark');
      console.log('Theme loaded from storage:', saved);
    } else {
      this.isDark.set(true);
      localStorage.setItem('theme', 'dark');
      console.log('No saved theme; defaulting to dark');
    }
  }

  toggle(): void {
    this.isDark.update(dark => !dark);
    localStorage.setItem('theme', this.isDark() ? 'dark' : 'light');
  }

  setDark(dark: boolean): void {
    this.isDark.set(dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }
}