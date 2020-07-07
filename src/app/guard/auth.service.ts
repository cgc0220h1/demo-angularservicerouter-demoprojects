import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;

  constructor() {
  }

  isAuthenticated(): boolean {
    return !!this.user;
  }

  login(): void {
    this.user = {
      name: 'Bob',
      token: 'token'
    };
  }

  logout(): void {
    this.user = null;
  }
}
