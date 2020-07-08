import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../theme/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ],
})
export class UsersModule { }
