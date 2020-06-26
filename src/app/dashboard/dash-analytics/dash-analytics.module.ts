import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashAnalyticsRoutingModule } from './dash-analytics-routing.module';
import { DashAnalyticsComponent } from './dash-analytics.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbPopoverModule, NgbProgressbarModule, NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CourseManagementComponent } from './course-management/course-management.component';
import { PurchaseManagementComponent } from './purchase-management/purchase-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { CommunityUserComponent } from './community-user/community-user.component';
import { MycourseComponent } from '../dash-learner/course/mycourse/mycourse.component';
import { AddCourseManagementComponent } from './course-management/add-course-management/add-course-management.component';

@NgModule({
  imports: [
    CommonModule,
    DashAnalyticsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbProgressbarModule,
    NgbPopoverModule,
    NgbTabsetModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatSlideToggleModule
  ],
  declarations: [
    DashAnalyticsComponent,
    CourseManagementComponent,
    PurchaseManagementComponent,
    UserManagementComponent,
    CommunityUserComponent,
    AddCourseManagementComponent
  ]
})
export class DashAnalyticsModule { }
