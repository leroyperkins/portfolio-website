import { bootstrapApplication } from '@angular/platform-browser';
import { AppConfigService } from './app/config/app-config.service';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

const configService = new AppConfigService();

configService.load().then(() => {
  bootstrapApplication(AppComponent, {
    providers: [
      { provide: AppConfigService, useValue: configService }
    ]
  });
});
