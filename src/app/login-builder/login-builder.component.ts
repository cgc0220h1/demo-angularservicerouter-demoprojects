import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../guard/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-builder',
  templateUrl: './login-builder.component.html',
})
export class LoginBuilderComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(6), Validators.required]]
    });
  }

  onSubmit(): void {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.get('email').value, this.loginForm.get('password').value);
      this.router.navigateByUrl('/youtube')
        .then(status => {
          if (!status) {
            alert('Cant Access');
          }
        })
        .catch(() => this.router.navigateByUrl('/'));
    }
  }
}
