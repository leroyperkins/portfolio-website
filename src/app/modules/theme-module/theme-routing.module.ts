import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemeToggleComponent } from './theme/theme-toggle.component';

const routes: Routes = [
  { path: '', component: ThemeToggleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule { }