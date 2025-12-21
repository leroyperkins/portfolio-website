import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectFreakDetailComponent} from './project-freak/project-freak-details.component'

const routes: Routes = [
  { path: '', component: ProjectsComponent },
  { path: 'freak', component: ProjectFreakDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }