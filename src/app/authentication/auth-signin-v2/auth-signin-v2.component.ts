import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/theme/shared/service/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AuthLoginModel } from 'src/app/theme/shared/model/auth-login/auth-login-model';
import { ValidationService } from 'src/app/services/validation.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-auth-signin-v2',
  templateUrl: './auth-signin-v2.component.html',
  styleUrls: ['./auth-signin-v2.component.scss']
})

export class AuthSigninV2Component implements OnInit {
  pay= 1;
  public loginform = new AuthLoginModel();
  loginForm: FormGroup;
  submitted = false;

  // userName: string;
  // password: string;
  isBusy: boolean;
  isInvalidCredentials: boolean;


  constructor(private authenticationService: AuthenticationService,
              private route: ActivatedRoute,
              private _snackBar: MatSnackBar,
              private formBuilder: FormBuilder,
              private readonly _validation: ValidationService,
              private readonly _router: Router) {
    // this.userName = '';
    // this.password = '';
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      // username: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
    this.route.queryParams.forEach((params) => {
      if (params.pay) {
        this.pay = params.pay;
        return;
      } else {
        this.pay = 0;
      }
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
  }

  public login(): void {
    if (this.loginForm.valid) {
        this.authenticationService
        .login(this.loginForm.controls.username.value,
           this.loginForm.controls.password.value)
           .subscribe((data) => {
          if (data && data.isAuthorize) {
            if (data.roles == 'Admin') {
              this._router.navigate(['/dashboard/admin']);
            } else {
              this._router.navigate(['/dashboard/learner/mycourse']);
            }

          } else {
            this._snackBar.open(data.error, 'Close', {
              duration: 2000,
              verticalPosition: 'top',
              horizontalPosition: 'right'
            });
          }
        });
    }

  }
  validateLogin() {
    if (!this.loginform.username && !this.loginform.password) {
      alert('Field Empty');
      return false;
    }
    return true;
  }

}




