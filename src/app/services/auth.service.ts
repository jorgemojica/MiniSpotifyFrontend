import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getUserRoles(): string[] {
    const token = localStorage.getItem('token');
    if (!token) return [];
    var decoded: any = jwtDecode(token);
    return [decoded.role];
  }

  isRoleAdmin(): boolean {
    return this.getUserRoles().includes('ROLE_ADMIN');
  }

}
