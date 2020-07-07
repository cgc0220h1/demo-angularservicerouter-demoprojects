import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DictionaryComponent} from './dictionary/dictionary.component';
import {DictionaryService} from './services/dictionary.service';
import {AppRoutingModule} from './router/app-routing.module';
import {DictionaryPageComponent} from './dictionary-page/dictionary-page.component';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';
import { LoginStep1Component } from './login-step1/login-step1.component';
import { LoginStep2Component } from './login-step2/login-step2.component';

@NgModule({
  declarations: [
    AppComponent,
    DictionaryComponent,
    DictionaryPageComponent,
    DictionaryDetailComponent,
    LoginStep1Component,
    LoginStep2Component
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  exports: [],
  providers: [DictionaryService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
