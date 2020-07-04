import { Component, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/models/user-profile.model';
import { UserProfileService } from 'src/app/services/user-profile.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  providers: [UserProfileService]
})
export class UserProfileComponent implements OnInit {

  userProfile: UserProfile;
  constructor(private readonly _userProfileService: UserProfileService) { }

  ngOnInit(): void {
    this.getUserProfile();
  }

  public getUserProfile(): void {
    this._userProfileService.getUserProfile().then((data) => {
      if (data && data.result) {
        this.userProfile = data.saveResult;
        console.log(this.userProfile)
      }
    });
  }
}
