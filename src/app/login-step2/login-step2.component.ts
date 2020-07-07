import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {LoginService} from '../guard/login.service';

@Component({
  selector: 'app-login-step2',
  templateUrl: './login-step2.component.html',
})
export class LoginStep2Component implements OnInit {
  username: string;
  password = new FormControl();
  user = {};

  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.username = this.loginService.loginData.username;
  }

  login(): void {
    this.loginService.loginData.password = this.password.value;
    this.user = {
      username: this.loginService.loginData.username,
      password: this.loginService.loginData.password
    };
  }
}
