import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DictionaryComponent } from './dictionary/dictionary.component';
import {DictionaryService} from './services/dictionary.service';

@NgModule({
  declarations: [
    AppComponent,
    DictionaryComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [DictionaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
