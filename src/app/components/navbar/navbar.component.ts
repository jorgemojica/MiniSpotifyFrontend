import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isAuthenticated: boolean = false;
  isUserMenuOpen: boolean = false;
  userName: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.validateAuth();
    this.loadUsername();
  }

  validateAuth() {
    var token = localStorage.getItem('token');
    this.isAuthenticated = token == '' || token == null ? false : true;
  }

  loadUsername() {
    this.userName = localStorage.getItem('username') ?? '';
    // localStorage.removeItem('username');
  }

  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

  closeUserMenu() {
    this.isUserMenuOpen = false;
  }

  logout() {
    this.closeUserMenu();
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

}
