import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DictionaryPageComponent} from '../dictionary-page/dictionary-page.component';
import {DictionaryComponent} from '../dictionary/dictionary.component';
import {DictionaryDetailComponent} from '../dictionary-detail/dictionary-detail.component';
import {AuthGuard} from '../guard/auth.guard';

const routes: Routes = [
  {
    path: 'dictionary-page',
    component: DictionaryPageComponent,
    children: [
      {
        path: ':key',
        component: DictionaryDetailComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'dictionary',
    component: DictionaryComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
