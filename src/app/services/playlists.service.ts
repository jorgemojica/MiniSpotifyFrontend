import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Playlist } from '../models/Playlist.model';

@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {

  url = 'http://localhost:8080/api/playlist';

  constructor(private http: HttpClient) { }

  getAllPlaylists(){
    return this.http.get<Playlist[]>(this.url);
  }

}
