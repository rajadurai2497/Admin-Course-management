import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ChangePassword } from 'src/app/models/password.model';
import { ForgetPasswordService } from 'src/app/services/forget-password.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  password =new ChangePassword()
  changePasswordForm: FormGroup;
  
  constructor(public dialogRef: MatDialogRef<ChangePasswordComponent>,private readonly _forgetPasswordService: ForgetPasswordService) { }

  ngOnInit() {
    this.changePasswordForm = new FormGroup({
      oldPassword: new FormControl(this.password.oldPassword, [
        Validators.required]),
      newPassword: new FormControl(this.password.newPassword, [
        Validators.required]),
      confirmPassword: new FormControl(this.password.confirmPassword, [
        Validators.required])
    });
  }
  get oldPassword() { return this.changePasswordForm.get('oldPassword'); }
  get newPassword() { return this.changePasswordForm.get('newPassword'); }
  get confirmPassword() { return this.changePasswordForm.get('cofirmPassword'); }

  getPasswordChange(){
    if(this.validateForgetPassword()){
    this._forgetPasswordService.getPasswordChange(this.password).then((data) => {
      if (data && data.result) {
        this.dialogRef.close(true);
        alert('Password Change successfully...!')
      }
      else{
        alert('Unable to Change Password')
      }
  });
}
}
validateForgetPassword() {
  if (!this.password.oldPassword) {
    alert('Enter old password ');
    return false;
  }
  if (!this.password.newPassword) {
    alert('Enter new password ');
    return false;
  }
  if (!this.password.confirmPassword) {
    alert('Enter re-enter password ');
    return false;
  }
  return true;
}
  onNoClick(): void {
    this.dialogRef.close();
  }

}
