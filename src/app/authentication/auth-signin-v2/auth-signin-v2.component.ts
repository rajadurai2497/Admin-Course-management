import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/theme/shared/service/authentication.service';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AuthLoginModel } from 'src/app/theme/shared/model/auth-login/auth-login-model';

@Component({
  selector: 'app-auth-signin-v2',
  templateUrl: './auth-signin-v2.component.html',
  styleUrls: ['./auth-signin-v2.component.scss']
})

export class AuthSigninV2Component implements OnInit {

  public loginform = new AuthLoginModel();
  loginForm: FormGroup;
  // userName: string;
  // password: string;
  isBusy: boolean;
  isInvalidCredentials: boolean;
  passwordpattern:'((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})';

  constructor(private authenticationService: AuthenticationService, private readonly _router: Router) {
    // this.userName = '';
    // this.password = '';
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(this.loginform.username, [
        Validators.required,
        Validators.minLength(3),
      ]),
      password: new FormControl(this.loginform.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(this.passwordpattern),
      ]),
      alterEgo: new FormControl(this.loginform.alterEgo),
    });
  }
  get username() { return this.loginForm.get('username');} 
  get password() { return this.loginForm.get('password'); }


  public login(): void {
    if (this.loginform.username !== '' && this.loginform.password !== '') {
      this.authenticationService.login(this.loginform.username, this.loginform.password).subscribe((data) => {
        if (data && data.isAuthorize) {
          if(data.roles=='Admin'){
            this._router.navigate(['/dashboard/admin']);
          }
          else{
            this._router.navigate(['/dashboard/learner/mycourse']);
          }

        }
      });
    }
  }
}




