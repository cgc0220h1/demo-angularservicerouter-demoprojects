import {Component} from '@angular/core';
import {AuthService} from './guard/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'demo-angularservicerouter-demoprojects';

  constructor(public authService: AuthService) {
  }

}
