import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexChartService } from 'src/app/theme/shared/components/chart/apex-chart/apex-chart.service';
import { dashboardEntity, dashboardTileEntity } from 'src/app/models/dashboard-admin.model';
import { AdminDashboardService } from 'src/app/services/admin-dashboard.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import * as moment from 'moment';
@Component({
  selector: 'app-dash-analytics',
  templateUrl: './dash-analytics.component.html',
  styleUrls: ['./dash-analytics.component.scss']
})
export class DashAnalyticsComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  displayedColumns: string[];
  adminDashboard: dashboardEntity[] = [];
  dataSource = new MatTableDataSource<dashboardEntity>();
  count = new dashboardTileEntity;

  constructor(private readonly _adminDashboardService: AdminDashboardService) { }

  ngOnInit(): void {
    this.displayedColumns = ['name', 'emailId', 'courseName', 'paymentDate', 'courseAmount'];
    this.getAdminDashboard();
  }

  public getAdminDashboard(): void {
    this._adminDashboardService.getAdminDashboard().then((data) => {
      if (data && data.result) {
        this.adminDashboard = data.dashboardEntity.dashboardTableEntity;
        this.count = data.dashboardEntity.dashboardTileEntity;
        this.dataSource = new MatTableDataSource<dashboardEntity>(this.adminDashboard);

        this.dataSource.filteredData.forEach(dashborad => {
          dashborad.paymentDate = moment(dashborad.paymentDate).format('DD/MM/YYYY');
        });
        this.dataSource.paginator = this.paginator;
      }
    });
  }
}















