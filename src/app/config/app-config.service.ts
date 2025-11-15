import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export interface AppConfig {
  emailjs: {
    serviceId: string;
    templateId: string;
    publicKey: string;
  };
}

@Injectable({ providedIn: 'root' })
export class AppConfigService {
  private config!: AppConfig;

  constructor(private http: HttpClient) {}

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
