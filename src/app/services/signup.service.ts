import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  url = 'http://localhost:8080/api/user/create';
  
  constructor(private http: HttpClient) { }

  createUser(user: User){
    return this.http.post<User>(this.url, user);
  }

}
