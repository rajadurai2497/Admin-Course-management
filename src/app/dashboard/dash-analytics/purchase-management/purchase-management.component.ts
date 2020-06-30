import { Component, OnInit } from '@angular/core';
import { PurchaseManagementService } from 'src/app/services/purchase-management.service';
import { PurchaseManagementModel } from 'src/app/models/purchase-management.model';


@Component({
  selector: 'app-purchase-management',
  templateUrl: './purchase-management.component.html',
  styleUrls: ['./purchase-management.component.scss'],
})
export class PurchaseManagementComponent implements OnInit {
  public purchaseManagement: PurchaseManagementModel;
  displayedColumns: string[];

  constructor(private readonly _purchaseManagementService: PurchaseManagementService) {}

  ngOnInit(): void {
    this._initializeValues();
    this._initializeProperties();
    this.getAllPurchaseManagement();
  }

  public getAllPurchaseManagement(): void {
    this._purchaseManagementService.getAllPurchaseManagement().subscribe((data: PurchaseManagementModel) => {
      this.purchaseManagement = data;
    });
  }

  private _initializeValues(): void {
    this.purchaseManagement = {
      paymentDetails: [],
      result: true,
    };
  }

  private _initializeProperties(): void {
    this.displayedColumns = ['id', 'name', 'course', 'email', 'password', 'phoneNumber', 'paidAmount', 'paidOn'];
  }
}
