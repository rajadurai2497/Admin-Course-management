import { Component, OnInit } from '@angular/core';
import { ForgetPassword } from 'src/app/models/password.model';
import { ForgetPasswordService } from 'src/app/services/forget-password.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-auth-reset-password-v2',
  templateUrl: './auth-reset-password-v2.component.html',
  styleUrls: ['./auth-reset-password-v2.component.scss']
})
export class AuthResetPasswordV2Component implements OnInit {

  forgetPassword: ForgetPassword;
  forget: FormGroup;
  mailId : string
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";  
  constructor(private readonly _forgetPasswordService: ForgetPasswordService,private readonly _validation: ValidationService,private readonly _router: Router) { }

  ngOnInit() {
    this.forget = new FormGroup({
      mailId: new FormControl(this.mailId, [
        Validators.required,
        Validators.pattern(this.emailPattern),
      ]),
    });
  }
  get mailid() { return this.mailId; }
  public getForgetPassword(): void {
    if(this.validateForgetPassword()){
    this._forgetPasswordService.getForgetPassword(this.mailId).then((data) => {
      if (data && data.result) {
        this.forgetPassword = data.saveResult;
        alert('Please Check your Email')
        this._router.navigate(['auth/signin']);
      }
      else{
        alert('Invalid')
      }
    });
  }
  }
  validateForgetPassword() {
    if (!this.mailId) {
      alert('Email Address Field Empty');
      return false;
    }

    if (!this._validation.isEmailId(this.mailId)) {
      alert('Invalid Email Address');
      return false;
    }
    return true;
  }
}
