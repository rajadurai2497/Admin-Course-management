import { Component, OnInit, ViewChild } from '@angular/core';
import { UserManagementService } from 'src/app/services/user-management.service';
import { AllUserList } from 'src/app/models/user-management.model';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';
import * as moment from 'moment';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class UserManagementComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator; 

  displayedColumns: string[];
  public userManagement: AllUserList[]=[];
  dataSource = new MatTableDataSource<AllUserList>();
  expandedElement: AllUserList | null;
  fromDate: Date = null;
  toDate: Date = null;


  constructor(private readonly _userManagementService: UserManagementService) {}

  ngOnInit(): void {
    this.displayedColumns = ['userName', 'emailId', 'phoneNumber', 'city','mailDate'];
    this.getAllUserManagement();
  }

  public getAllUserManagement(): void {
    this._userManagementService.getAllUserManagement().then((data) => {
      if(data && data.result){
        this.userManagement = data.allUserList;
        this.userManagement.forEach(user => {
          user.mailDate = moment(user.mailDate).format('DD/MM/YYYY');
        });
        this.dataSource=new MatTableDataSource<AllUserList>(this.userManagement);
        this.dataSource.paginator = this.paginator;
      }
    });
  }
  filter() {
    let filteredData: AllUserList[] = [];
    const fromDate = this.fromDate ?
      moment(moment(this.fromDate).format('DD/MM/YYYY'), 'DD/MM/YYYY') : null;
    const toDate = this.toDate ?
      moment(moment(this.toDate).format('DD/MM/YYYY'), 'DD/MM/YYYY') : null;
      if (fromDate && toDate) {
        this.userManagement.forEach(element => {
          const date = moment(element.mailDate, "DD/MM/YYYY");
          if (date && (date.isBetween(fromDate, toDate)) ||
            (date.valueOf() == fromDate.valueOf() || date.valueOf() == toDate.valueOf())) {
            filteredData.push(element);
          }
        });
        this.dataSource = new MatTableDataSource(filteredData);
        this.dataSource.paginator = this.paginator;
      }  else {
      this.dataSource = new MatTableDataSource(this.userManagement);
      this.dataSource.paginator = this.paginator;
    }
  }
}








  

  
  


  

 


 






















  
   

 
    