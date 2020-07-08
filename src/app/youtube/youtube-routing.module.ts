import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {YoutubePlayerComponent} from './youtube-player/youtube-player.component';
import {YoutubePlaylistComponent} from './youtube-playlist/youtube-playlist.component';


const routes: Routes = [
  {
    path: '',
    component: YoutubePlaylistComponent,
    children: [
      {
        path: ':id',
        component: YoutubePlayerComponent,
      }
    ],
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YoutubeRoutingModule {
}
