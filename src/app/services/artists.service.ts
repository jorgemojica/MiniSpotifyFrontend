import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Artist } from '../models/artist.model';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8080/api/artist'

  getAllArtists(){
    return this.http.get<Artist[]>(this.url);
  }

}
