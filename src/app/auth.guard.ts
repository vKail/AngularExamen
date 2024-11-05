import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { map, switchMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isAuthenticated.pipe(
      take(1),
      switchMap((isAuth) => {
        if (isAuth) {
          return this.authService.userRole.pipe(
            take(1),
            map((role) => {
              if (route.data['role'] && route.data['role'] !== role) {
                this.router.navigate(['/']);
                return false;
              }
              return true;
            })
          );
        } else {
          return of(this.router.createUrlTree(['/login']));
        }
      })
    );
  }
}