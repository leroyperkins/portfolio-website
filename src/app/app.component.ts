import { Component, inject } from '@angular/core'; 
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { ThemeService } from './services/theme/theme.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HttpClientModule],
  templateUrl: './app.html',
})
export class AppComponent {
  title = 'portfolio-website';
  private themeService = inject(ThemeService);
}