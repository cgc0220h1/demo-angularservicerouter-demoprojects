import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DictionaryComponent} from '../old-dictionary/dictionary.component';
import {LoginStep1Component} from '../login-step1/login-step1.component';
import {LoginStep2Component} from '../login-step2/login-step2.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'dictionary',
    component: DictionaryComponent
  },
  {
    path: 'login-step-1',
    component: LoginStep1Component
  },
  {
    path: 'login-step-2',
    component: LoginStep2Component
  },
  {
    path: 'blog',
    loadChildren: () => import('../blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'dictionary-page',
    loadChildren: () => import('../dictionary/dictionary.module').then(m => m.DictionaryModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: AppRoutingModule
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
