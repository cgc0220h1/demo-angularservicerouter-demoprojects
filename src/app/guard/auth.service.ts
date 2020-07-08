import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: {
    name: string,
    token: string
  };
  admin = {
    name: 'admin@example.com',
    token: 'admin123456'
  };

  constructor() {
  }

  isAuthenticated(): boolean {
    const adminString = JSON.stringify(this.admin);
    const userString = JSON.stringify(this.user);
    return userString === adminString;
  }

  login(username: string, password: string): void {
    this.user = {
      name: username,
      token: password
    };
  }

  logout(): void {
    this.user = null;
  }
}
