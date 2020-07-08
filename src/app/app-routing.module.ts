import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DictionaryComponent} from './old-dictionary/dictionary.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './guard/auth.guard';
import {LoginBuilderComponent} from './login-builder/login-builder.component';

const routes: Routes = [
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
    canLoad: [AuthGuard]
  },
  {
    path: 'dictionary-page',
    loadChildren: () => import('./dictionary/dictionary.module').then(m => m.DictionaryModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'time-lived',
    loadChildren: () => import('./time-lived/time-lived.module').then(m => m.TimeLivedModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'youtube',
    loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule),
    canLoad: [AuthGuard]
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
