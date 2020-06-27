import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashAnalyticsComponent } from './dash-analytics.component';
import { CourseManagementComponent } from './course-management/course-management.component';

const routes: Routes = [
  {
    path: '',
    component: DashAnalyticsComponent
  },
  {
    path: 'course-management',
    loadChildren: () => import('./course-management/course-management.module').then(module => module.CourseManagementModule)
  },
  {
    path: 'purchase-management',
    loadChildren: () => import('./purchase-management/purchase-management.module').then(module => module.PurchaseManagementModule)
  },
  {
    path: 'user-management',
    loadChildren: () => import('./user-management/user-management.module').then(module => module.UserManagementModule)
  },
  {
    path: 'community-user',
    loadChildren: () => import('./community-user/community-user.module').then(module => module.CommunityUserModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashAnalyticsRoutingModule { }
