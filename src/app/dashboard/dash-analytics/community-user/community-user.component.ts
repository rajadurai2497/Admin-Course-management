import { Component, OnInit, ViewChild } from '@angular/core';
import { CommunityUserService } from 'src/app/services/community-user.service';
import { ComunityUserList } from 'src/app/models/community-user.model';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import * as moment from 'moment';
@Component({
  selector: 'app-community-user',
  templateUrl: './community-user.component.html',
  styleUrls: ['./community-user.component.scss']
})
export class CommunityUserComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  displayedColumns: string[];
  communityUser: ComunityUserList[] = [];
  dataSource = new MatTableDataSource<ComunityUserList>();
  fromDate: Date = null;
  toDate: Date = null;
  constructor(private readonly _communityUserService: CommunityUserService) { }

  ngOnInit(): void {
    this.displayedColumns = ['fullName', 'emailId', 'phoneNumber','createdDate'];
    this.getAllCommunityUser();
  }

  public getAllCommunityUser(): void {
    this._communityUserService.getAllCommunityUser().then((data) => {
      if (data && data.result) {
        this.communityUser = data.comunityUserList;
        this.dataSource = new MatTableDataSource<ComunityUserList>(this.communityUser);
        this.dataSource.paginator = this.paginator;
      }

    });
  }
  filter() {
    let filteredData: ComunityUserList[] = [];
    const fromDate = this.fromDate ?
      moment(moment(this.fromDate).format('DD/MM/YYYY'), 'DD/MM/YYYY') : null;
    const toDate = this.toDate ?
      moment(moment(this.toDate).format('DD/MM/YYYY'), 'DD/MM/YYYY') : null;
    if (fromDate && toDate) {
      this.communityUser.forEach(element => {
        const paidOn = moment(element.createdDate, "DD/MM/YYYY");
        if (paidOn && paidOn.isBetween(fromDate, toDate)) {
          filteredData.push(element);
        }
      });
      this.dataSource = new MatTableDataSource(filteredData);
      this.dataSource.paginator = this.paginator;
    } else {
      this.dataSource = new MatTableDataSource(this.communityUser);
      this.dataSource.paginator = this.paginator;
    }
  }
}



