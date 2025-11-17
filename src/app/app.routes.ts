import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home-module/home-routing.module')
      .then(m => m.HomeRoutingModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./modules/about-module/about-routing.module')
      .then(m => m.AboutRoutingModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./modules/projects-module/projects-routing.module')
      .then(m => m.ProjectsRoutingModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./modules/contact-module/contact-routing.module')
      .then(m => m.ContactRoutingModule)
  },
  {
    path: 'experience',
    loadChildren: () => import('./modules/experience-module/experience-routing.module')
      .then(m => m.ExperienceRoutingModule)
  },
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: '**', redirectTo: '/about' }
];