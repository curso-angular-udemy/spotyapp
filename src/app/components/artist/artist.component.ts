import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {

  artista: any;
  topTracks: Array<any>;

  constructor(private route: ActivatedRoute,
              private spotifyService: SpotifyService) {
    this.route.params.subscribe( params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtista(id) {
    this.spotifyService.getArtist(id).subscribe( artista => {
      this.artista = artista;
      console.log(artista);
    });
  }

  getTopTracks(id) {
    this.spotifyService.getTopTracks(id).subscribe( tracks => {
      this.topTracks = tracks;
      console.log(tracks[0].uri.split(':')[2]);
    });
  }
}
