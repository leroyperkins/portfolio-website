import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { AppConfig } from './app-config.model';

@Injectable({ providedIn: 'root' })
export class AppConfigService {
  private http = inject(HttpClient);
  private config!: AppConfig;

  load(): Promise<void> {
    return firstValueFrom(
      this.http.get<AppConfig>('/assets/environment.json')
    ).then(cfg => {
      this.config = cfg;
    });
  }

  getConfig(): AppConfig {
    return this.config;
  }
}
