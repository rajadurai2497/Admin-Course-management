import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { CourseRoutingModule } from './course-routing.module';
import { MycourseViewComponent } from './mycourse-view/mycourse-view.component';
import { MycourseComponent } from './mycourse/mycourse.component';
 

@NgModule({
  declarations: [MycourseComponent, MycourseViewComponent],
  imports: [
    CommonModule,
    CourseRoutingModule,
  ]
})
export class CourseModule { }
