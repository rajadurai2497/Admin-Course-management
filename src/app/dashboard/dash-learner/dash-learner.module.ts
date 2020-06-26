import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashLearnerRoutingModule } from './dash-learner-routing.module';
import { DashLearnerComponent } from './dash-learner.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';


@NgModule({
  declarations: [DashLearnerComponent],
  imports: [
    CommonModule,
    DashLearnerRoutingModule,
    SharedModule
  ]
})
export class DashLearnerModule { }
