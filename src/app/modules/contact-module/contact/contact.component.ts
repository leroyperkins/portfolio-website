import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';
import { ButtonComponent } from '../../../shared/layout/button/button.component';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent, NgClass],
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  private fb = inject(FormBuilder);
  private toastr = inject(ToastrService);
  contactForm!: FormGroup;
  messageLength = 0;
  maxMessageLength = 500;

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s\-']{2,50}$/)]],
      company: [''],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.maxLength(this.maxMessageLength)]],
    });

    this.contactForm.get('message')?.valueChanges.subscribe(value => {
      this.messageLength = value?.length || 0;
    });
  }

  async submit() {
    if (this.contactForm.valid) {
      try {
        const response: EmailJSResponseStatus = await emailjs.send(
          environment.emailjs.serviceId,
          environment.emailjs.templateId,
          this.contactForm.value,
          environment.emailjs.userId
        );
        console.log('Email sent successfully:', response.status, response.text);
        this.toastr.success('Your message has been sent successfully!', 'Success');
        this.contactForm.reset();
      } catch (error) {
        console.error('Email sending failed:', error);
        this.toastr.error('Failed to send message. Please try again later.', 'Error');
      }
    } else {
      this.contactForm.markAllAsTouched();
      this.toastr.warning('Please fill out all required fields correctly.', 'Form Incomplete');
    }
  }
}