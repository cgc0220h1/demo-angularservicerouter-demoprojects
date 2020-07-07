import {Component, OnInit} from '@angular/core';
import {YoutubeService} from '../../services/youtube.service';

@Component({
  selector: 'app-youtube-playlist',
  templateUrl: './youtube-playlist.component.html',
})
export class YoutubePlaylistComponent implements OnInit {

  constructor(private youtubeService: YoutubeService) {
  }

  ngOnInit(): void {
  }

}
