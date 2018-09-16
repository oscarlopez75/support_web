import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  getUser(): any {
    return sessionStorage.getItem('username');
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }

  isTokenIn(): string {
    return this.getToken();
  }

  logout(): any {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('role');
  }

  getToken(): any{
    return sessionStorage.getItem('token');
  }

  getRole(): any{
    return sessionStorage.getItem('role');
  }

}
