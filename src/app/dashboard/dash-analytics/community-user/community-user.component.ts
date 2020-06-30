import { Component, OnInit } from '@angular/core';
import { CommunityUserService } from 'src/app/services/community-user.service';
import { CommunityUserModel } from 'src/app/models/community-user.model';

@Component({
  selector: 'app-community-user',
  templateUrl: './community-user.component.html',
  styleUrls: ['./community-user.component.scss']
})
export class CommunityUserComponent implements OnInit {
  publiccommunityUser: CommunityUserModel;
  displayedColumns: string[];
  communityUser: CommunityUserModel;

  constructor(private readonly _communityUserService: CommunityUserService) { }

  ngOnInit(): void {
    this._initializeValues();
    this._initializeProperties();
    this.getAllCommunityUser();
  }

  public getAllCommunityUser(): void {
    this._communityUserService.getAllCommunityUser().subscribe((data: CommunityUserModel) => {
      this.communityUser = data;
    });
  }


  private _initializeValues(): void {
    this.communityUser = {
      comunityUserList: [],
      result: true,
    };
  }

  private _initializeProperties(): void {
    this.displayedColumns = ['id', 'fullName', 'emailId', 'phoneNumber'];
  }

}
