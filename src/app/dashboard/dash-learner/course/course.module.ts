import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { CourseRoutingModule } from './course-routing.module';
import { MycourseViewComponent } from './mycourse-view/mycourse-view.component';
import { MycourseComponent } from './mycourse/mycourse.component';
import { ChapterViewComponent } from './chapter-view/chapter-view.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
 

@NgModule({
  declarations: [MycourseComponent, MycourseViewComponent, ChapterViewComponent],
  imports: [
    CommonModule,
    CourseRoutingModule,
    SharedModule
  ]
})
export class CourseModule { }
