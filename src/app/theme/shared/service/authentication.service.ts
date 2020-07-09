import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthLoginModel } from '../model/auth-login/auth-login-model';
import { Observable, BehaviorSubject } from 'rxjs';
import { LoginResponseModel } from '../model/auth-login/login-response-model';
import { map } from 'rxjs/operators';
import { ROUTE_CONFIG } from 'src/app/models/constant';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private readonly routePrefix = 'Token';
  private currentUserSubject: BehaviorSubject<LoginResponseModel>;
  public currentUser: Observable<LoginResponseModel>;
  private currentSettingSubject: BehaviorSubject<any>;
  public currentSetting: Observable<any>;

  constructor(private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<LoginResponseModel>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    this.currentSettingSubject = new BehaviorSubject<any>(null);
    this.currentSetting = this.currentSettingSubject.asObservable();
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.loggedIn.next(true);
    }
  }
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  public get currentUserValue(): LoginResponseModel {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string): Observable<LoginResponseModel> {
    const apiUrl = `${ROUTE_CONFIG.BaseUrl}/${this.routePrefix}`;
    const payload = 'username=' + username + '&password=' + password;
    return this.httpClient
      .post<LoginResponseModel>(apiUrl, payload, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
      .pipe(
        map((user) => {
          if (user.isAuthorize) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
          } else {
            alert(user.error);
          }
        }),
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
