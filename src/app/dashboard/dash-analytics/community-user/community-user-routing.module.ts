import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommunityUserComponent } from './community-user.component';


const routes: Routes = [
  {
    path: '',
    component: CommunityUserComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunityUserRoutingModule { }
