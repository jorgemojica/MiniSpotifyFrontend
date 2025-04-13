import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Artist } from '../models/artist.model';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  url = 'http://localhost:8080/api/artist';

  constructor(private http: HttpClient) { }

  getArtist(id: string){
    return this.http.get<Artist>(this.url + '/' + id);
  }

}
