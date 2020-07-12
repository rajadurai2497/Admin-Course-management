import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanLoad,
  Router,
  Route,
  UrlSegment,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../service/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanActivate, CanLoad {
  constructor(private router: Router, private authenticationService: AuthenticationService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
        return true;
    }

    this.router.navigate(['/auth/signin'], { queryParams: { returnUrl: state.url } });
    return false;
  }

  canLoad(route: Route, segments: UrlSegment[]) {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
      // console.log('in AuthGuard currentuser is available');
      // logged in so return true
      return true;
    } else {
      // console.log('in AuthGuard currentuser is not available');
      // not logged in so redirect to login page with the return url
      this.router.navigate(['/auth/signin']);
      return false;
    }
  }
}
