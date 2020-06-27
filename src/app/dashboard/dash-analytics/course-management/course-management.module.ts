import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseManagementRoutingModule } from './course-management-routing.module';
import { CourseManagementComponent } from './course-management.component';
import { AddCourseManagementComponent } from './add-course-management/add-course-management.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AddChapterComponent } from './add-chapter/add-chapter.component';


@NgModule({
  declarations: [CourseManagementComponent, 
    AddCourseManagementComponent, AddChapterComponent],
  imports: [
    CommonModule,
    CourseManagementRoutingModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatSlideToggleModule

  ],
})
export class CourseManagementModule { }
