import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent } from './theme/layout/auth/auth.component';
import { AuthGuardGuard } from './theme/shared/guard/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuardGuard],
    canLoad: [AuthGuardGuard],
    children: [
      {
        path: '',
        redirectTo: '/auth/signin',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then((module) => module.DashboardModule),
      },
      {
        path: 'users',
        loadChildren: () => import('./users/users.module').then((module) => module.UsersModule),
      },
    ],
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () =>
          import('./authentication/authentication.module').then((module) => module.AuthenticationModule),
      },
      {
        path: 'maintenance',
        loadChildren: () => import('./maintenance/maintenance.module').then((module) => module.MaintenanceModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
