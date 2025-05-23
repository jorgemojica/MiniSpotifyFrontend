import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login.model';
import { LoginResponse } from '../models/login-response.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://localhost:8080/auth/login';

  constructor(private http: HttpClient) { }

  login(credentials: Login){
    return this.http.post<LoginResponse>(this.url, credentials);
  }

}
