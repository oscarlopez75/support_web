import { Injectable } from '@angular/core';

import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
// var Base64 = require('js-base64').Base64;
import { Base64 } from 'js-base64';
import { JwtHelperService } from '@auth0/angular-jwt';


const helper = new JwtHelperService();

@Injectable()
export class RoleGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;
    const token = sessionStorage.getItem('token');
    // decode the token to get its payload
    try {
      var payLoadUrl = token.split('.')[1];
      var payLoadBase64 = payLoadUrl.replace('-', '+').replace('_', '/');
      var tokenPayload = JSON.parse(Base64.decode(payLoadBase64));
    } catch (e) {
      console.log(e);
    }
    // const tokenPayload = helper.decodeToken(token);

    if (!this.auth.isLoggedIn() || !expectedRole.includes(tokenPayload.role)) {
     this.router.navigate(['login']);
     alert('Sorry, you don\'t have access to this link')
     return false;
    }

    return true;
 }

}
