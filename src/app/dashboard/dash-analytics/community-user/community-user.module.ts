import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityUserRoutingModule } from './community-user-routing.module';
import { CommunityUserComponent } from './community-user.component';


@NgModule({
  declarations: [CommunityUserComponent],
  imports: [
    CommonModule,
    CommunityUserRoutingModule
  ]
})
export class CommunityUserModule { }
