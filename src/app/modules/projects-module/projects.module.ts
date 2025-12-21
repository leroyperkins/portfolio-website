import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectFreakDetailComponent } from './project-freak/project-freak-details.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ProjectsComponent,
    ProjectFreakDetailComponent
  ]
})
export class ProjectsModule { }