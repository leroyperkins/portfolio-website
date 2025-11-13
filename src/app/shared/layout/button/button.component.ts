// src/app/shared/button/button.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [RouterModule],
  standalone: true,
  template: `
    <button
      [type]="type"
      [routerLink]="routerLink"
      [class]="classes"
      (click)="tryClick.emit()"
      class="font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[--color-accent] focus:ring-offset-2 focus:ring-offset-[--color-background]"
    >
      <ng-content></ng-content>
    </button>
  `
})
export class ButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() variant: 'primary' | 'secondary' | 'tertiary' = 'primary';
  @Input() routerLink: string | null = null;

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