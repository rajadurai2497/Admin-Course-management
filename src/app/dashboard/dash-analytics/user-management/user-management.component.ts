import { Component, OnInit } from '@angular/core';
import { UserManagementService } from 'src/app/services/user-management.service';
import { UserManagementModel } from 'src/app/models/user-management.model';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent implements OnInit {
  public userManagement: UserManagementModel;
  displayedColumns: string[];

  constructor(private readonly _userManagementService: UserManagementService) {}

  ngOnInit(): void {
    this._initializeValues();
    this._initializeProperties();
    this.getAllUserManagement();
  }

  public getAllUserManagement(): void {
    this._userManagementService.getAllUserManagement().subscribe((data: UserManagementModel) => {
      this.userManagement = data;
    });
  }

  private _initializeValues(): void {
    this.userManagement = {
      allUserList: [],
      result: true,
    };
  }

  private _initializeProperties(): void {
    this.displayedColumns = ['id', 'userName', 'password', 'name', 'emailId', 'phone', 'city'];
  }
}
