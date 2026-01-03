import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectFreakDetailComponent} from './project-freak/project-freak-details.component'
import { ProjectBalloonDetailsComponent } from './balloon-project/project-balloon-details.component';
import { Level1ProjectDetailsComponent } from './level1-project/level1-project-details.component';
import { RobotArmDetailsComponent } from './robot-arm-project/robot-arm-details.component';

const routes: Routes = [
  { path: '', component: ProjectsComponent },
  { path: 'freak', component: ProjectFreakDetailComponent },
  { path: 'balloon', component: ProjectBalloonDetailsComponent},
  { path: 'level1', component: Level1ProjectDetailsComponent },
  { path: 'robot-arm', component: RobotArmDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }