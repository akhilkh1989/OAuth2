import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc'; 

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private oauthService: OAuthService, private router: Router) {
    console.log("initialized Auth Guard Service....");
   }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.oauthService.hasValidIdToken()) {
      return true;
    }
    console.log("redirecting to home");
    this.router.navigate(['/home']);
    return false;
  }
}
