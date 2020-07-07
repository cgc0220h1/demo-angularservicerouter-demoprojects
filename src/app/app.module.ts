import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DictionaryComponent} from './old-dictionary/dictionary.component';
import {DictionaryService} from './services/dictionary.service';
import {AppRoutingModule} from './app-routing.module';
import { LoginStep1Component } from './login-step1/login-step1.component';
import { LoginStep2Component } from './login-step2/login-step2.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DictionaryComponent,
    LoginStep1Component,
    LoginStep2Component
  ],
    imports: [
        BrowserModule,
        NgbModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  exports: [],
  providers: [DictionaryService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
