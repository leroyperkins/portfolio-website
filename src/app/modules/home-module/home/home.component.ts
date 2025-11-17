import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeService } from '../../../services/resume/resume.service';
import { GithubApiService } from '../../../services/github-api/github-api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private resumeService = inject(ResumeService);
  private githubService = inject(GithubApiService);

  data = this.resumeService.data;
  languages: { name: string; percentage: number; color: string }[] = [];

  private languageColors: Record<string, string> = {
    TypeScript: '#007acc',
    HTML: '#e34f26',
    CSS: '#563d7c',
    JavaScript: '#f7df1e',
  };

  ngOnInit() {
    this.fetchRepoLanguages('leroyperkins', 'portfolio-website');
  }

  private fetchRepoLanguages(owner: string, repo: string) {
    this.githubService.getRepoLanguages(owner, repo).subscribe({
      next: (response) => {
        const totalBytes = Object.values(response).reduce((sum, bytes) => sum + (bytes as number), 0);
        if (totalBytes === 0) {
          this.setFallback();
          return;
        }

        this.languages = Object.entries(response)
          .map(([name, bytes]) => {
            const percentage = ((bytes as number) / totalBytes) * 100;
            const color = this.languageColors[name] || 'var(--color-border)';
            return { name, percentage: parseFloat(percentage.toFixed(2)), color };
          })
          .sort((a, b) => b.percentage - a.percentage);
      },
      error: (err) => {
        console.error('GitHub API error:', err);
        this.setFallback();
      }
    });
  }

  private setFallback() {
    this.languages = [
      { name: 'TypeScript', percentage: 58.47, color: '#10b981' },
      { name: 'HTML', percentage: 36.29, color: '#059669' },
      { name: 'CSS', percentage: 3.52, color: '#047857' },
      { name: 'JavaScript', percentage: 1.73, color: '#34d399' }
    ].sort((a, b) => b.percentage - a.percentage);
  }
}