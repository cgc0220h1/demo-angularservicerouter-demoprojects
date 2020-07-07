import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../guard/login.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-login-step1',
  templateUrl: './login-step1.component.html',
})
export class LoginStep1Component implements OnInit {
  username = new FormControl('');

  constructor(
    private router: Router,
    private loginService: LoginService,
  ) {
  }

  ngOnInit(): void {
  }

  nextStep(): void {
    this.loginService.loginData.username = this.username.value;
    this.router.navigateByUrl('/login-step-2').then(r => console.log(r));
  }
}
