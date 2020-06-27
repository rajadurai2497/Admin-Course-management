import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseManagementRoutingModule } from './purchase-management-routing.module';
import { PurchaseManagementComponent } from './purchase-management.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatDatepickerModule, MatInputModule, MatDialogModule, MatCardModule, MatSlideToggleModule, MatTableModule, MatIconModule, MatButtonModule } from '@angular/material';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { TinymceModule } from 'angular2-tinymce';


@NgModule({
  declarations: [PurchaseManagementComponent],
  imports: [
    CommonModule,
    PurchaseManagementRoutingModule,
    FormsModule,
    SharedModule,
  ]
})
export class PurchaseManagementModule { }
