import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DictionaryDetailComponent} from './dictionary-detail/dictionary-detail.component';
import {DictionaryPageComponent} from './dictionary-page/dictionary-page.component';


const routes: Routes = [
  {
    path: '',
    component: DictionaryPageComponent,
    children: [
      {
        path: ':key',
        component: DictionaryDetailComponent,
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DictionaryRoutingModule {
}
