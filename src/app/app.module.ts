import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DictionaryComponent} from './dictionary/dictionary.component';
import {DictionaryService} from './services/dictionary.service';
import {AppRoutingModule} from './app-routing.module';
import {DictionaryPageComponent} from './dictionary-page/dictionary-page.component';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DictionaryComponent,
    DictionaryPageComponent,
    DictionaryDetailComponent
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
