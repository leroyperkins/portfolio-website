import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withRouterConfig } from '@angular/router';  // Add withInMemoryScrolling import

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled'
      }),
      withRouterConfig({
        onSameUrlNavigation: 'reload'
      })
    ),
    provideAnimations(),
    provideToastr({
      timeOut: 3000,
      positionClass: 'toast-center-center',
      preventDuplicates: true,
      progressBar: true,
      progressAnimation: 'increasing',
      closeButton: true,
      tapToDismiss: true,
      newestOnTop: true,
      toastClass: 'ngx-toastr bg-[var(--color-surface)] text-[var(--color-text)] border border-[var(--color-border)] rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-[var(--color-accent)]/30 transition-all duration-300 max-w-md mx-auto',  // Bubble-like: rounded, shadowed, centered width
      iconClasses: {
        error: 'toast-error text-red-500',
        info: 'toast-info text-blue-500',
        success: 'toast-success text-[var(--color-accent)]',
        warning: 'toast-warning text-yellow-500'
      },
      titleClass: 'font-bold text-[var(--color-text)] text-base', 
      messageClass: 'text-[var(--color-text-secondary)] text-sm font-light'
    })
  ]
};