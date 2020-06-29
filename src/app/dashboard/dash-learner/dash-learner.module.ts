import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashLearnerRoutingModule } from './dash-learner-routing.module';
import { DashLearnerComponent } from './dash-learner.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { MycourseComponent } from './course/mycourse/mycourse.component';
import { MycourseViewComponent } from './course/mycourse-view/mycourse-view.component';


@NgModule({
  declarations: [DashLearnerComponent],
  imports: [
    CommonModule,
    DashLearnerRoutingModule,
    SharedModule
  ]
})
export class DashLearnerModule { }
