import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementComponent } from './user-management.component';
import {
  MatDialogModule,
  MatFormFieldModule,
  MatSlideToggleModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatSnackBarModule,
} from '@angular/material';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [UserManagementComponent],
  imports: [CommonModule, UserManagementRoutingModule,MatSnackBarModule, SharedModule, MatTableModule, MatIconModule, MatButtonModule],
})
export class UserManagementModule { }
