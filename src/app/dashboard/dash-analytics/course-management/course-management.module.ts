import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseManagementRoutingModule } from './course-management-routing.module';
import { AddCourseManagementComponent } from './add-course-management/add-course-management.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AddChapterComponent } from './add-chapter/add-chapter.component';
import { TinymceModule } from 'angular2-tinymce';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule, MatTableModule } from '@angular/material';
import { PreviewCourseComponent } from './preview-course/preview-course.component';
import { FormsModule } from '@angular/forms';
import { CourseManagementComponent } from './course-management.component';


@NgModule({
  declarations: [
    AddCourseManagementComponent,
     AddChapterComponent, 
     PreviewCourseComponent,
    CourseManagementComponent],
  imports: [
    CommonModule,
    FormsModule,
    CourseManagementRoutingModule
  ],
  entryComponents:[ AddCourseManagementComponent]
})
export class CourseManagementModule { }
