import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const URL = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer QB35CYF54jpLABuosKkW52HVepG7iLiLuKUry3eXCumg4587vJ0LL8ys1KYhPqZHvKFtGNQzck5d2otAHg'
    });
    return this.http.get(URL, {headers});
  }

  getNewReleases(): Observable<any> {

    return this.getQuery('browse/new-releases').pipe(
      map ( data => {
        return data['albums'].items;
      })
    );
  }

  getArtists(termino: string): Observable<any> {

    return this.getQuery(`search?q=${ termino }&type=artist`).pipe(
      map ( data => {
        return data['artists'].items;
      })
    );
  }

  getArtist(artistId: string): Observable<any> {
    return this.getQuery(`artists/${artistId}`);
  }

  getTopTracks(artistId: string): Observable<any> {
    return this.getQuery(`artists/${artistId}/top-tracks?country=es`).pipe(
      map( (data: any) => data.tracks)
    );
  }

}
