import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MycourseComponent } from './mycourse/mycourse.component';
import { ChapterViewComponent } from './chapter-view/chapter-view.component';


const routes: Routes = [
  {
    path: '',
    component: MycourseComponent
  },
  {
    path: '',
    component: ChapterViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
