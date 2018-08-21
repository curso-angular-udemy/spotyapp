import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  artistas: Array<any> = [];
  loading: boolean;

  constructor( private spotifyService: SpotifyService) { }

  buscar(termino: string) {
    if (termino.length > 0) {
      this.loading = true;
      this.spotifyService.getArtists(termino).subscribe( data => {
        this.artistas = data;
        this.loading = false;
      });
    }
  }
}
