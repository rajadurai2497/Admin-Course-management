import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseManagementRoutingModule } from './course-management-routing.module';
import { AddCourseManagementComponent } from './add-course-management/add-course-management.component';
import { AddChapterComponent } from './add-chapter/add-chapter.component';
import { PreviewCourseComponent } from './preview-course/preview-course.component';
import { CourseManagementComponent } from './course-management.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';


@NgModule({
  declarations: [
    AddCourseManagementComponent,
    AddChapterComponent,
    PreviewCourseComponent,
    CourseManagementComponent],
  imports: [
    CommonModule,
    SharedModule,
    CourseManagementRoutingModule
  ],
  entryComponents: [AddCourseManagementComponent]
})
export class CourseManagementModule { }
