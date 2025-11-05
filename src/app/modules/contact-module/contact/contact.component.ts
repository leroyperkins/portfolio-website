import { Component } from '@angular/core';
import { ButtonComponent } from "../../../shared/layout/button/button.component";

@Component({
  selector: 'app-contact',
  imports: [ButtonComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
  export class ContactComponent {
    submit() {
  throw new Error('Method not implemented.');
  }
}
