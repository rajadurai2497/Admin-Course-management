import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementComponent } from './user-management.component';
import { MatDialogModule, MatCardModule, MatFormFieldModule, MatSlideToggleModule, MatTableModule, MatIconModule, MatButtonModule } from '@angular/material';
import { TinymceModule } from 'angular2-tinymce';


@NgModule({
  declarations: [UserManagementComponent],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    TinymceModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule
  ],
})
export class UserManagementModule { }
