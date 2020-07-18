import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
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
  submitted = false;

  constructor(public dialogRef: MatDialogRef<ChangePasswordComponent>,
    private readonly _forgetPasswordService: ForgetPasswordService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.changePasswordForm = this.formBuilder.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
  }, {
      validator: ConfirmedValidator('newPassword', 'confirmPassword')
  });
  }
  get f() { return this.changePasswordForm.controls; }

  
  
  onSubmit() {
    this.submitted = true;
    if (this.changePasswordForm.invalid) {
        return;
    }
  }

  getPasswordChange(){
    if(this.changePasswordForm.valid){
    this._forgetPasswordService.getPasswordChange(this.changePasswordForm.value).then((data) => {
      if (data && data.responseStatus) {
        this.dialogRef.close(true);
        alert('Password Change successfully...!')
      }
      else{
        alert(data.resposeResult)
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
export function ConfirmedValidator(controlName: string, matchingControlName: string){
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
          return;
      }
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ confirmedValidator: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}