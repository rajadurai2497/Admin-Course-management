import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MycourseComponent } from './course/mycourse/mycourse.component';


const routes: Routes = [
  {
    path: 'mycourse',
    loadChildren: () => import('./course/course.module').then(module => module.CourseModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashLearnerRoutingModule { }
