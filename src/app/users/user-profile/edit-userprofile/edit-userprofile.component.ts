import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserProfile } from 'src/app/models/user-profile.model';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-edit-userprofile',
  templateUrl: './edit-userprofile.component.html',
  styleUrls: ['./edit-userprofile.component.scss']
})
export class EditUserprofileComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<EditUserprofileComponent>,
    private readonly _userProfileService:UserProfileService,
    @Inject(MAT_DIALOG_DATA) public data: UserProfile) { }

  ngOnInit() {
  }
  public updateUserProfile(): void {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.data.userId=currentUser.userId;
    this._userProfileService.updateUserProfile(this.data).then((data) => {
      if (data && data.result) {
        this.dialogRef.close(data.saveResult);
        alert('Profile updated successfully...!')
      }
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
