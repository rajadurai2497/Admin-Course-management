import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashAnalyticsComponent} from './dash-analytics.component';
import { CourseManagementComponent } from './course-management/course-management.component';
import { PurchaseManagementComponent } from './purchase-management/purchase-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { CommunityUserComponent } from './community-user/community-user.component';

const routes: Routes = [
  {
    path: '',
    component: DashAnalyticsComponent
  },
  {
    path: 'course-management',
    component: CourseManagementComponent
  },
  {
    path: 'purchase-management',
    component: PurchaseManagementComponent
  },
  {
    path: 'user-management',
    component: UserManagementComponent
  },
  {
    path: 'community-user',
    component:CommunityUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashAnalyticsRoutingModule { }
