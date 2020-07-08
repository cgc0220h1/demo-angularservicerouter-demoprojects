import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DictionaryComponent} from './old-dictionary/dictionary.component';
import {LoginStep1Component} from './login-step1/login-step1.component';
import {LoginStep2Component} from './login-step2/login-step2.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './guard/auth.guard';
import {LoginBuilderComponent} from './login-builder/login-builder.component';

const routes: Routes = [
  {
    path: 'login-step-1',
    component: LoginStep1Component,
  },
  {
    path: 'login-step-2',
    component: LoginStep2Component,
  },
  {
    path: 'login',
    component: LoginBuilderComponent
  },
  {
    path: 'dictionary',
    component: DictionaryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'dictionary-page',
    loadChildren: () => import('./dictionary/dictionary.module').then(m => m.DictionaryModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'time-lived',
    loadChildren: () => import('./time-lived/time-lived.module').then(m => m.TimeLivedModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'youtube',
    loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule),
    canActivate: [AuthGuard]
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
