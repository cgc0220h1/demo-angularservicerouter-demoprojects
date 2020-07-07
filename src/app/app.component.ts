import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-angularservicerouter-demoprojects';
  isDictionaryAppOn: boolean;

  showDictionaryApp(): void {
    this.isDictionaryAppOn = this.isDictionaryAppOn !== true;
  }
}
