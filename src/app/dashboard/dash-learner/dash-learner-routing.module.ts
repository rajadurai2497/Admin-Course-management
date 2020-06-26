import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MycourseComponent } from './course/mycourse/mycourse.component';


const routes: Routes = [
  {
    path: 'mycourse',
    component: MycourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashLearnerRoutingModule { }
