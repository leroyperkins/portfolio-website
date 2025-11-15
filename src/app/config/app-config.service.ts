import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private config: any;

  load() {
    return fetch('/assets/config.json')
      .then(response => response.json())
      .then(json => this.config = json);
  }

  get(key: string) {
    return this.config[key];
  }
}
