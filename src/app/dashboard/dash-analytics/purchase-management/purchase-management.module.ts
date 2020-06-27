import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseManagementRoutingModule } from './purchase-management-routing.module';
import { PurchaseManagementComponent } from './purchase-management.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatDatepickerModule, MatInputModule } from '@angular/material';
import { SharedModule } from 'src/app/theme/shared/shared.module';


@NgModule({
  declarations: [PurchaseManagementComponent],
  imports: [
    CommonModule,
    PurchaseManagementRoutingModule,
    FormsModule,
    SharedModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule
  ]
})
export class PurchaseManagementModule { }
