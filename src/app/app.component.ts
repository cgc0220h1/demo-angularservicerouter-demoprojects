import {Component} from '@angular/core';
import {AuthService} from './guard/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'demo-angularservicerouter-demoprojects';

  constructor(public authService: AuthService, private router: Router) {
  }


  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/login').then(success => console.log(success)).catch(error => console.log(error));
  }
}
