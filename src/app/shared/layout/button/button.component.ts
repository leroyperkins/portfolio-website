import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  template: `
    <button
      [type]="type"
      [class]="classes"
      (click)="tryClick.emit()"
    >
      <ng-content></ng-content>
    </button>
  `
})
export class ButtonComponent {
  @Input() type: 'button' | 'submit' = 'button';
  @Input() classes = 'px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition';

  @Output() tryClick = new EventEmitter<void>();
}