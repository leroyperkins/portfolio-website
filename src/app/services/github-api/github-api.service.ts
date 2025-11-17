import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  private http = inject(HttpClient);
  private baseUrl = 'https://api.github.com';

  getRepoLanguages(owner: string, repo: string): Observable<Record<string, number>> {
    return this.http.get<Record<string, number>>(`${this.baseUrl}/repos/${owner}/${repo}/languages`);
  }
}