import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
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
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: '**', redirectTo: '/about' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }