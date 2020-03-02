import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '@youtube/auth/services/authentication.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  public isAuth: boolean;
  public userName: string;
  constructor(private authenticationService: AuthenticationService) {}

  public ngOnInit(): void {
    const userName: string = localStorage.getItem('name');
    this.isAuth = Boolean(userName);
    if (userName) {
      this.userName = userName;
    }
  }

  public onSubmit(form: NgForm): void {
    this.isAuth = this.authenticationService.logIn(form.form.value);
  }

  public logOut(): void {
    this.isAuth = this.authenticationService.logOut();
    this.userName = '';
  }
}
