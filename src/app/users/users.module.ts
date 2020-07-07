import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ChangePasswordComponent } from './user-profile/change-password/change-password.component';
import { SharedModule } from '../theme/shared/shared.module';

@NgModule({
  declarations: [ChangePasswordComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ],
  entryComponents: [ChangePasswordComponent]
})
export class UsersModule { }
