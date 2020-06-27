import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementComponent } from './user-management.component';
import { MatDialogModule, MatCardModule, MatFormFieldModule, MatSlideToggleModule, MatTableModule, MatIconModule, MatButtonModule } from '@angular/material';
import { SharedModule } from 'src/app/theme/shared/shared.module';


@NgModule({
  declarations: [UserManagementComponent],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    SharedModule
  ],
})
export class UserManagementModule { }
