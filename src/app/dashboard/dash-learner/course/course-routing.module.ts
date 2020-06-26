import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MycourseComponent } from './mycourse/mycourse.component';


const routes: Routes = [
  {
    path: '',
    component: MycourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
