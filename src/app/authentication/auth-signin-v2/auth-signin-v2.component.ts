import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/theme/shared/service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-signin-v2',
  templateUrl: './auth-signin-v2.component.html',
  styleUrls: ['./auth-signin-v2.component.scss']
})

export class AuthSigninV2Component implements OnInit {
  userName: string;
  password: string;
  isBusy: boolean;
  isInvalidCredentials: boolean;

  constructor(private authenticationService: AuthenticationService, private readonly _router: Router) {
    this.userName = '';
    this.password = '';
  }

  ngOnInit() {}
  public login(): void {
    if (this.userName !== '' && this.password !== '') {
      this.authenticationService.login(this.userName, this.password).subscribe((data) => {
        if (data && data.isAuthorize) {
          // this._router.navigate(['/dashboard/admin']);
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




