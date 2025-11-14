import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [CommonModule, RouterModule],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  template: `
    <button
      [type]="type"
      [routerLink]="routerLink"
      (click)="checkClick.emit()"
      [ngClass]="[
        'font-medium rounded-xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-transparent hover:backdrop-blur-sm hover:scale-102',
        classes,
        class
      ]"
    >
      <ng-content></ng-content>
    </button>
  `
})
export class ButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() variant: 'primary' | 'secondary' | 'tertiary' | 'none' = 'primary';
  @Input() routerLink: string | null = null;
  @Input() class = '';

  @Output() checkClick = new EventEmitter<void>();

  get classes(): string {
    switch (this.variant) {
      case 'primary':
        return 'w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-emerald-400 dark:hover:bg-emerald-500 dark:text-black shadow-md hover:shadow-xl hover:shadow-emerald-500/50 dark:hover:shadow-emerald-400/50';  // Hardcoded colors for complete change; enhanced shadow
      case 'secondary':
        return 'w-full py-3 border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500/10 hover:border-emerald-600 dark:border-emerald-400 dark:text-emerald-400 dark:hover:border-emerald-500';
      case 'tertiary':
        return 'px-4 py-2 text-emerald-600 hover:underline underline-offset-4 dark:text-emerald-400';
      default:
        return '';
    }
  }
}