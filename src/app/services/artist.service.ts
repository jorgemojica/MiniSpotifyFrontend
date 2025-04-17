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

  createArtist(artist: Artist){
    return this.http.post<Artist>(this.url, artist);
  }

  updateArtist(id: string, artist: Artist){
    return this.http.put<Artist>(this.url + '/' + id, artist);
  }

  deleteArtist(id: number){
    return this.http.delete(this.url + '/' + id, { responseType: 'text' });
  }

}
