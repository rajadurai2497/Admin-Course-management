import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseManagementComponent } from './purchase-management.component';


const routes: Routes = [
  {
    path: '',
    component: PurchaseManagementComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseManagementRoutingModule { }
