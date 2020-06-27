import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseManagementRoutingModule } from './purchase-management-routing.module';
import { PurchaseManagementComponent } from './purchase-management.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';


@NgModule({
  declarations: [PurchaseManagementComponent],
  imports: [
    CommonModule,
    PurchaseManagementRoutingModule,
    SharedModule,
  ]
})
export class PurchaseManagementModule { }
