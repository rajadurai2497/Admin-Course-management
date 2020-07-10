import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardAdminGuard } from '../theme/shared/guard/dashboard-admin.guard';
import { DashboardLearnerGuard } from '../theme/shared/guard/dashboard-learner.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'admin',
        canActivate: [DashboardAdminGuard],

        loadChildren: () => import('./dash-analytics/dash-analytics.module').then(module => module.DashAnalyticsModule)
      },
      {
        path: 'learner',
        canActivate: [DashboardLearnerGuard],
        loadChildren: () => import('./dash-learner/dash-learner.module').then(module => module.DashLearnerModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
