import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectFreakDetailComponent } from './project-freak/project-freak-details.component';
import { ProjectBalloonDetailsComponent } from './balloon-project/project-balloon-details.component'
import { Level1ProjectDetailsComponent } from './level1-project/level1-project-details.component'

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ProjectsComponent,
    ProjectFreakDetailComponent,
    ProjectBalloonDetailsComponent,
    Level1ProjectDetailsComponent 
  ]
})
export class ProjectsModule { }