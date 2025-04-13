import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Track } from '../models/track';

@Injectable({
  providedIn: 'root'
})
export class TracksService {

  url = 'http://localhost:8080/api/track';

  constructor(private http: HttpClient) { }

  getAllTracks(){
    return this.http.get<Track[]>(this.url);
  }

}
