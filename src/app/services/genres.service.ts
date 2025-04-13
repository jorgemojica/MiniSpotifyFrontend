import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Genre } from '../models/Genre.model';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  url = 'http://localhost:8080/api/genre';

  constructor(private http: HttpClient) { }

  getAllGenres(){
    return this.http.get<Genre[]>(this.url);
  }

}
