import { Component, OnInit, ViewChild } from '@angular/core';
import { PurchaseManagementService } from 'src/app/services/purchase-management.service';
import { PaymentDetails } from 'src/app/models/purchase-management.model';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import * as moment from 'moment';

@Component({
  selector: 'app-purchase-management',
  templateUrl: './purchase-management.component.html',
  styleUrls: ['./purchase-management.component.scss'],
})
export class PurchaseManagementComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  dataSource = new MatTableDataSource<PaymentDetails>();
  public purchaseManagement: PaymentDetails[] = [];
  displayedColumns: string[];


  fromDate: Date = null;
  toDate: Date = null;

  constructor(private readonly _purchaseManagementService: PurchaseManagementService) { }

  ngOnInit(): void {
    this.displayedColumns = ['id', 'name', 'course', 'email', 'password', 'phoneNumber', 'paidAmount', 'paidOn'];
    this.getAllPurchaseManagement();
  }

  public getAllPurchaseManagement(): void {
    this._purchaseManagementService.getAllPurchaseManagement().then((data) => {
      if (data && data.result) {
        this.purchaseManagement = data.paymentDetails;
        this.dataSource = new MatTableDataSource<PaymentDetails>(this.purchaseManagement);
        this.dataSource.paginator = this.paginator;
      }
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  filter() {
    let filteredData: PaymentDetails[] = [];
    const fromDate = this.fromDate ?
      moment(moment(this.fromDate).format('DD/MM/YYYY'), 'DD/MM/YYYY') : null;
    const toDate = this.toDate ?
      moment(moment(this.toDate).format('DD/MM/YYYY'), 'DD/MM/YYYY') : null;
    if (fromDate && toDate) {
      this.purchaseManagement.forEach(element => {
        const paidOn = moment(element.paidOn, "DD/MM/YYYY");
        if (paidOn && paidOn.isBetween(fromDate, toDate)) {
          filteredData.push(element);
        }
      });
      this.dataSource = new MatTableDataSource(filteredData);
      this.dataSource.paginator = this.paginator;
    } else {
      this.dataSource = new MatTableDataSource(this.purchaseManagement);
      this.dataSource.paginator = this.paginator;
    }
  }
}

