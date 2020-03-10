import { Injectable } from '@angular/core';
import { User } from '@youtube/auth/models/user';
import { Router } from '@angular/router';
import { AutorizationInfoService } from '@youtube/core/services/autorization-info.service';
import { RequestResultService } from '@youtube/core/services/request-result.service';

@Injectable()
export class AuthenticationService {
  private isLogin: boolean;

  constructor(
    private router: Router,
    private autorizationInfoService: AutorizationInfoService,
    private requestResultService: RequestResultService,
  ) {}

  public logIn(user: User): boolean {
    localStorage.setItem('name', user.name);
    localStorage.setItem('password', user.password);
    this.autorizationInfoService.setName(user.name);
    this.router.navigate(['']);
    this.isLogin = true;
    return this.isLogin;
  }

  public logOut(): boolean {
    localStorage.clear();
    this.autorizationInfoService.setName('Your name');
    this.requestResultService.clearResults();
    this.isLogin = false;
    return this.isLogin;
  }
}
