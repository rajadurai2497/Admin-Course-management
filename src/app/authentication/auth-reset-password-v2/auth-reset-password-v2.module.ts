import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthResetPasswordV2RoutingModule } from './auth-reset-password-v2-routing.module';
import { AuthResetPasswordV2Component } from './auth-reset-password-v2.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthResetPasswordV2Component],
  imports: [
    CommonModule,
    AuthResetPasswordV2RoutingModule,
    FormsModule
  ]
})
export class AuthResetPasswordV2Module { }
