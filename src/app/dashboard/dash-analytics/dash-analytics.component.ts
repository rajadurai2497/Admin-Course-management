import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexChartService } from 'src/app/theme/shared/components/chart/apex-chart/apex-chart.service';
import { dashboardEntity, dashboardTileEntity } from 'src/app/models/dashboard-admin.model';
import { AdminDashboardService } from 'src/app/services/admin-dashboard.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-dash-analytics',
  templateUrl: './dash-analytics.component.html',
  styleUrls: ['./dash-analytics.component.scss']
})
// export class DashAnalyticsComponent implements OnInit {
//   dtExportButtonOptions: any = {};
//   public chartDB: any;
//   public dailyVisitorStatus: string;
//   public dailyVisitorAxis: any;
//   public deviceProgressBar: any;

//   constructor(public apexEvent: ApexChartService) {
//     this.dailyVisitorStatus = '1y';

//     this.deviceProgressBar = [
//       {
//         type: 'success',
//         value: 66
//       }, {
//         type: 'primary',
//         value: 26
//       }, {
//         type: 'danger',
//         value: 8
//       }
//     ];
//   }

//   dailyVisitorEvent(status) {
//     this.dailyVisitorStatus = status;
//     switch (status) {
//       case '1m':
//         this.dailyVisitorAxis = {
//           min: new Date('28 Jan 2013').getTime(),
//           max: new Date('27 Feb 2013').getTime(),
//         };
//         break;
//       case '6m':
//         this.dailyVisitorAxis = {
//           min: new Date('27 Sep 2012').getTime(),
//           max: new Date('27 Feb 2013').getTime()
//         };
//         break;
//       case '1y':
//         this.dailyVisitorAxis = {
//           min: new Date('27 Feb 2012').getTime(),
//           max: new Date('27 Feb 2013').getTime()
//         };
//         break;
//       case 'ytd':
//         this.dailyVisitorAxis = {
//           min: new Date('01 Jan 2013').getTime(),
//           max: new Date('27 Feb 2013').getTime()
//         };
//         break;
//       case 'all':
//         this.dailyVisitorAxis = {
//           min: undefined,
//           max: undefined
//         };
//         break;
//     }

//     setTimeout(() => {
//       this.apexEvent.eventChangeTimeRange();
//     });
//   }

//   ngOnInit() {
//     this.dtExportButtonOptions = {
//     ajax: './fake-data/datatable-data.json',
//     columns: [{
//       title: 'Name',
//       data: 'name'
//     }, {
//       title: 'Position',
//       data: 'position'
//     }, {
//       title: 'Office',
//       data: 'office'
//     }, {
//       title: 'Age',
//       data: 'age'
//     }, {
//       title: 'Start Date',
//       data: 'date'
//     }, {
//       title: 'Salary',
//       data: 'salary'
//     }],
//     dom: 'Bfrtip',
//     buttons: [
//       'copy',
//       'print',
//       'excel',
//       'csv'
//     ]
//   };
// }

// }


export class DashAnalyticsComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator; 

  displayedColumns: string[];
  adminDashboard: dashboardEntity[]=[];
  dataSource = new MatTableDataSource<dashboardEntity>();
  count=new dashboardTileEntity;

  constructor(private readonly _adminDashboardService: AdminDashboardService) {}

  ngOnInit(): void {
    this.displayedColumns = ['name', 'emailId', 'courseName', 'paymentDate','courseAmount'];
    this.getAdminDashboard();
  }

  public getAdminDashboard(): void {
    this._adminDashboardService.getAdminDashboard().then((data) => {
      if(data && data.result){
        this.adminDashboard = data.dashboardEntity.dashboardTableEntity;
        this.count = data.dashboardEntity.dashboardTileEntity;
        this.dataSource=new MatTableDataSource<dashboardEntity>(this.adminDashboard);
        this.dataSource.paginator = this.paginator;
      }
    });
  }
}




  
 


  

  

  

 
       
    