import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseManagementRoutingModule } from './purchase-management-routing.module';
import { PurchaseManagementComponent } from './purchase-management.component';


@NgModule({
  declarations: [PurchaseManagementComponent],
  imports: [
    CommonModule,
    PurchaseManagementRoutingModule
  ]
})
export class PurchaseManagementModule { }
