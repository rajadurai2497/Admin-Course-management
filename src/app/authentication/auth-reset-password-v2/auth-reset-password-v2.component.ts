import { Component, OnInit } from '@angular/core';
import { ForgetPassword } from 'src/app/models/password.model';
import { ForgetPasswordService } from 'src/app/services/forget-password.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-auth-reset-password-v2',
  templateUrl: './auth-reset-password-v2.component.html',
  styleUrls: ['./auth-reset-password-v2.component.scss']
})

export class AuthResetPasswordV2Component implements OnInit {

  forgetPassword: ForgetPassword;
  forgetForm: FormGroup;

  submitted = false;
  mailId: string

  constructor(private readonly _forgetPasswordService: ForgetPasswordService,
    private formBuilder: FormBuilder,
    private readonly _validation: ValidationService, private readonly _router: Router) { }

  ngOnInit() {
    this.forgetForm = this.formBuilder.group({
      mailId: ['', [Validators.required, Validators.email]],
    });
  }
  get f() { return this.forgetForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.forgetForm.invalid) {
      return;
    }
  }
  public getForgetPassword(): void {
    if (this.forgetForm.valid) {
      this._forgetPasswordService.getForgetPassword(this.forgetForm.controls.mailId.value).then((data) => {
        if (data && data.result) {
          this.forgetPassword = data.saveResult;
          alert('Please Check your Email')
          this._router.navigate(['auth/signin']);
        }
        else {
          alert('Invalid')
        }
      });
    }
  }
}
//   validateForgetPassword() {
//     if (!this.mailId) {
//       alert('Email Address Field Empty');
//       return false;
//     }

//     if (!this._validation.isEmailId(this.mailId)) {
//       alert('Invalid Email Address');
//       return false;
//     }
//     return true;
//   }
// }
