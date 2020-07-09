import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserProfile } from 'src/app/models/user-profile.model';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-edit-userprofile',
  templateUrl: './edit-userprofile.component.html',
  styleUrls: ['./edit-userprofile.component.scss']
})
export class EditUserprofileComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<EditUserprofileComponent>,
    private readonly _userProfileService: UserProfileService,
    @Inject(MAT_DIALOG_DATA) public data: UserProfile,
    private readonly _validation: ValidationService) { }

  userProfile: FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";  
  phpattern: '^((\\+91-?)|0)?[0-9]{10}$';

  ngOnInit() {
    this.userProfile = new FormGroup({
      userName: new FormControl(this.data.name, [
        Validators.required,
      ]),
      emailId: new FormControl(this.data.emailId, [
        Validators.required,
        Validators.pattern(this.emailPattern),
      ]),
      phoneNumber: new FormControl(this.data.phoneNumber, [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern(this.phpattern)
      ]),
      city: new FormControl(this.data.city, [
        Validators.required
      ]),
    });
  }
  get name() { return this.userProfile.get('name'); }
  get emailId() { return this.userProfile.get('emailId'); }
  get phoneNumber() { return this.userProfile.get('phoneNumber'); }
  get city() { return this.userProfile.get('city'); }


  public updateUserProfile(): void {
    if (this.validateProfile()) {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.data.userId = currentUser.userId;
      this._userProfileService.updateUserProfile(this.data).then((data) => {
        if (data && data.result) {
          this.dialogRef.close(data.saveResult);
          alert('Profile updated successfully...!')
        }
        else {
          alert('unale to Profile updated')
        }
      });
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  validateProfile() {
    if (!this.data.name) {
      alert('Enter User name');
      return false;
    }
    if (!this.data.emailId) {
      alert('Enter the Email Address');
      return false;
    }
    if (!this.data.phoneNumber) {
      alert('Enter the Phone number');
      return false;
    }
    if (!this.data.city) {
      alert('Enter city');
      return false;
    }
    if (!this._validation.isEmailId(this.data.emailId)) {
      alert('Invalid Email Address');
      return false;
    }
    if (!this._validation.isAlphaNumeric(this.data.phoneNumber )) {
      alert('Enter the number');
      return false;
    }
    if (this.data.phoneNumber.length!=10) {
      alert('this is not phone number');
      return false;
    }
    return true;
    console.log(this.data.phoneNumber.length)
  }

}
