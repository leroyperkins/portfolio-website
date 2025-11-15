// src/app/components/contact/contact.component.ts
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgClass } from '@angular/common';
import { ButtonComponent } from '../../../shared/layout/button/button.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgClass, ButtonComponent],
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  private fb = inject(FormBuilder);
  contactForm!: FormGroup;
  messageLength = 0;
  maxMessageLength = 500;

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s\-']{2,50}$/)]],  // Letters, spaces, hyphens, apostrophes; 2-50 chars
      company: [''],  // Optional
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],  // Standard email
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.maxLength(this.maxMessageLength)]],
    });

    this.contactForm.get('message')?.valueChanges.subscribe(value => {
      this.messageLength = value?.length || 0;
    });
  }

  submit() {
    if (this.contactForm.valid) {
      // TODO: Integrate backend (e.g., HttpClient post to API/Formspree)
      console.log('Submitted:', this.contactForm.value);  // Placeholder
      alert('Message sent!');  // Temp UX; use toastr/mat-snack-bar in prod
      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}