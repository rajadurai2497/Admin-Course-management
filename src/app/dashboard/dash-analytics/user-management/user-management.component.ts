import { Component, OnInit, ViewChild } from '@angular/core';
import { UserManagementService } from 'src/app/services/user-management.service';
import { AllUserList } from 'src/app/models/user-management.model';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator; 

  displayedColumns: string[];
  public userManagement: AllUserList[]=[];
  dataSource = new MatTableDataSource<AllUserList>();
  

  constructor(private readonly _userManagementService: UserManagementService) {}

  ngOnInit(): void {
    this.displayedColumns = ['id', 'userName', 'password', 'name', 'emailId', 'phone', 'city'];
    this.getAllUserManagement();
  }

  public getAllUserManagement(): void {
    this._userManagementService.getAllUserManagement().then((data) => {
      if(data && data.result){
        this.userManagement = data.allUserList;
        this.dataSource=new MatTableDataSource<AllUserList>(this.userManagement);
        this.dataSource.paginator = this.paginator;
      }
    });
  }
}




  
   

 
    