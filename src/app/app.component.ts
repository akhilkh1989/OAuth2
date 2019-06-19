import { Component } from '@angular/core';
import { OAuthService, JwksValidationHandler,AuthConfig } from 'angular-oauth2-oidc';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-demo';
  constructor(private oauthService: OAuthService){
    const config = new AuthConfig();

    config.redirectUri = window.location.origin;
    config.clientId = '0oaqd1z20KZaBzJhU356';
    config.scope = 'openid profile email';
    config.issuer = 'https://dev-694494.okta.com/oauth2/default';
    this.oauthService.configure(config);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();

    // Load Discovery Document and then try to login the user
    this.oauthService.loadDiscoveryDocument().then(() => {
      this.oauthService.tryLogin();
    });
  }
}
