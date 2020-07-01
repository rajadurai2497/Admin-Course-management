import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseManagementRoutingModule } from './course-management-routing.module';
import { AddCourseManagementComponent } from './add-course-management/add-course-management.component';
import { AddChapterComponent } from './add-chapter/add-chapter.component';
import { PreviewCourseComponent } from './preview-course/preview-course.component';
import { CourseManagementComponent } from './course-management.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import {TinymceModule} from 'angular2-tinymce';
import { ChapterDetailComponent } from './chapter-detail/chapter-detail.component';
import { EditTopicComponent } from './edit-topic/edit-topic.component';
import { EditChapterComponent } from './edit-chapter/edit-chapter.component';
@NgModule({
  declarations: [
    AddCourseManagementComponent,
    AddChapterComponent,
    PreviewCourseComponent,
    CourseManagementComponent,
    ChapterDetailComponent,
    EditTopicComponent,
    EditChapterComponent],
  imports: [
    CommonModule,
    SharedModule,
    CourseManagementRoutingModule,
    TinymceModule
  ],
  entryComponents: [AddCourseManagementComponent,EditChapterComponent]
})
export class CourseManagementModule { }
