import { Component, OnInit, ViewChild } from '@angular/core';
import { UserManagementService } from 'src/app/services/user-management.service';
import { AllUserList } from 'src/app/models/user-management.model';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';

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

  constructor(private readonly _userManagementService: UserManagementService) {}

  ngOnInit(): void {
    this.displayedColumns = ['userName', 'password', 'name', 'emailId', 'phone', 'city'];
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









  

  
  


  

 


 






















  
   

 
    