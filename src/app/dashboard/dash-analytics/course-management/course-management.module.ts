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
import { AddTopicComponent } from './add-topic/add-topic.component';
import { AddAttachmentComponent } from './add-attachment/add-attachment.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
@NgModule({
  declarations: [
    AddCourseManagementComponent,
    AddChapterComponent,
    PreviewCourseComponent,
    CourseManagementComponent,
    ChapterDetailComponent,
    EditTopicComponent,
    EditChapterComponent,
    AddTopicComponent,
    AddAttachmentComponent,
    EditCourseComponent],
  imports: [
    CommonModule,
    SharedModule,
    CourseManagementRoutingModule,
    TinymceModule
  ],
  entryComponents: [AddCourseManagementComponent,EditChapterComponent,AddAttachmentComponent,EditCourseComponent]
})
export class CourseManagementModule { }
