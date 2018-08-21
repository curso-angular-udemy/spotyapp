import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  nuevasCanciones: Array<any> = [];
  loading: boolean;
  error: string;

  constructor( private spotifyService: SpotifyService) {
    this.loading = true;
    this.spotifyService.getNewReleases().subscribe(
      data => {
      this.nuevasCanciones = data;
      this.loading = false;
    },
    errorService => {
      this.error = errorService.error.error.message;
      this.loading = false;
    });
   }
}
