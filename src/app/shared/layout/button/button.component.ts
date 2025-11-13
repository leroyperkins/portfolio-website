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
      (click)="tryClick.emit()"
      [ngClass]="[
        'font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[--color-accent] focus:ring-offset-2 focus:ring-offset-[--color-background]',
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

  @Output() tryClick = new EventEmitter<void>();

  get classes(): string {
    switch (this.variant) {
      case 'primary':
        return 'w-full py-3 bg-[--color-accent] hover:bg-[--color-accent-hover] text-black shadow-md hover:shadow-lg hover:shadow-[--color-accent]/40';
      case 'secondary':
        return 'w-full py-3 border-2 border-[--color-accent] text-[--color-accent] hover:bg-[--color-accent]/10 hover:border-[--color-accent-hover]';
      case 'tertiary':
        return 'px-4 py-2 text-[--color-accent] hover:underline underline-offset-4';
      default:
        return '';
    }
  }
}
