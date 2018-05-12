import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { CookieService } from 'ngx-cookie';
@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private cookieService: CookieService, public router: Router) {}
  canActivate(): boolean {
    const key = this.cookieService.get('pin_accepted');
    if (key !== undefined) {
      return true;
    }
    return false;
  }
}
