import { inject, Injectable, signal } from '@angular/core';
import { effect } from '@angular/core';
import { DOCUMENT } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private document = inject(DOCUMENT);
  private html = this.document.documentElement;

  isDark = signal<boolean>(false);

  constructor() {
    effect(() => {
      const dark = this.isDark();
      if (dark) {
        this.html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        this.html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    });
  }

  init(): void {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (saved === 'dark' || (!saved && prefersDark)) {
      this.isDark.set(true);
    } else {
      this.isDark.set(false);
    }
  }

  toggle(): void {
    this.isDark.update(dark => !dark);
  }

  setDark(dark: boolean): void {
    this.isDark.set(dark);
  }

}
