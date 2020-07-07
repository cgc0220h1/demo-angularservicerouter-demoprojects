import {Injectable} from '@angular/core';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginData = {
    username: ''
    ,
    password: ''
  };

  constructor() {
  }
}
