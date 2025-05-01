import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Artist } from '../models/artist.model';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  url = 'http://localhost:8080/api/artist';
  spotifyUrl = 'https://api.spotify.com/v1/artists';

  constructor(private http: HttpClient) { }

  // Local Database Artists
  // getAllArtists(){
  //   return this.http.get<Artist[]>(this.url);
  // }

  // Spotify Database Artists
  getAllArtists(ids: string[], headers: HttpHeaders, params: HttpParams){
    return this.http.get<{ artists: Artist[] }>(this.spotifyUrl, { headers, params });
  }

  getArtistsReport(){
    return this.http.get(this.url + '/report', { responseType: 'blob' });
  }

}
