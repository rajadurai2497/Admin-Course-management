import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityUserRoutingModule } from './community-user-routing.module';
import { CommunityUserComponent } from './community-user.component';
import {
  MatDialogModule,
  MatCardModule,
  MatFormFieldModule,
  MatSlideToggleModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
} from '@angular/material';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [CommunityUserComponent],
  imports: [
    CommonModule,
    CommunityUserRoutingModule,
    SharedModule,
    MatTableModule, MatIconModule, MatButtonModule

  ]
})
export class CommunityUserModule { }
