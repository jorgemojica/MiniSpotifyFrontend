import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:8080/api/user';

  constructor(private http: HttpClient) { }

  getUserByUsername(username: string){
    return this.http.get<User>(this.url + '/username/' + username);
  }

  updateUser(id: number, user: User){
    return this.http.patch<User>(this.url + '/' + id, user);
  }

}
