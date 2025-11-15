import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app/app.component';
import { AppConfigService } from './app/config/app-config.service';

// APP_INITIALIZER factory
export function initializeApp(configService: AppConfigService) {
  return () => configService.load();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),

    AppConfigService,

    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppConfigService],
      multi: true
    }
  ]
});
