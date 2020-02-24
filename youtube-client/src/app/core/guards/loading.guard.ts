import { Injectable } from '@angular/core';
import {
  CanLoad,
  Route,
  UrlSegment,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoadingGuard implements CanLoad {
  constructor(private router: Router) {}

  public canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkAuth();
  }

  public  checkAuth(): boolean {
    let isAuth: boolean;
    isAuth = true;
    if (isAuth) {
      return isAuth;
    }
    this.router.navigate(['/auth']);
    return isAuth;
  }
}
