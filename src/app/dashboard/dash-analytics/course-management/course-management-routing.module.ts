import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseManagementComponent } from './course-management.component';
import { PreviewCourseComponent } from './preview-course/preview-course.component';


const routes: Routes = [
  {
    path: '',
    component: CourseManagementComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseManagementRoutingModule { }
