import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DictionaryPageComponent} from '../dictionary-page/dictionary-page.component';
import {DictionaryComponent} from '../dictionary/dictionary.component';
import {DictionaryDetailComponent} from '../dictionary-detail/dictionary-detail.component';
import {AuthGuard} from '../guard/auth.guard';
import {LoginStep1Component} from '../login-step1/login-step1.component';
import {LoginStep2Component} from '../login-step2/login-step2.component';

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
