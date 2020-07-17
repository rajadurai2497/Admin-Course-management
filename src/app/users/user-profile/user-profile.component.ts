import { Component, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/models/user-profile.model';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { MatDialog } from '@angular/material';
import { EditUserprofileComponent } from './edit-userprofile/edit-userprofile.component';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  providers: [UserProfileService]
})
export class UserProfileComponent implements OnInit {

  userProfile: UserProfile;
  constructor(private dialog: MatDialog,private readonly _userProfileService: UserProfileService) { }

  ngOnInit(): void {
    this.getUserProfile();
  }

  editProfile()
  {
    let dialogRef = this.dialog.open(EditUserprofileComponent, {
      height: '470px',
      width: '500px',
      data:JSON.parse(JSON.stringify(this.userProfile))
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
      // this.userProfile = result;
      this.getUserProfile();
      }
    });

  }
  public getUserProfile(): void {
    this._userProfileService.getUserProfile().then((data) => {
      if (data && data.result) {
        this.userProfile = data.saveResult;
      }
    });
  }
}
