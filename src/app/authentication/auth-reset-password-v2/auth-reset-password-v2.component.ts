import { Component, OnInit } from '@angular/core';
import { ForgetPassword } from 'src/app/models/password.model';
import { ForgetPasswordService } from 'src/app/services/forget-password.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-reset-password-v2',
  templateUrl: './auth-reset-password-v2.component.html',
  styleUrls: ['./auth-reset-password-v2.component.scss']
})
export class AuthResetPasswordV2Component implements OnInit {

  forgetPassword: ForgetPassword;
  mailId : string
  constructor(private readonly _forgetPasswordService: ForgetPasswordService,private readonly _router: Router) { }

  ngOnInit() {
  }
  public getForgetPassword(): void {
    this._forgetPasswordService.getForgetPassword(this.mailId).then((data) => {
      if (data && data.result) {
        this.forgetPassword = data.saveResult;
        alert('Please Check your Email')
        this._router.navigate(['auth/signin']);
      }
    });
  }
}
