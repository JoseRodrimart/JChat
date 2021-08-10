import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import {LocalStorageService} from '../localStorage/local-storage.service';



@Injectable({
  providedIn: 'root'
})
export class JWTTokenService {

  jwtToken?: string;
  decodedToken?: { [key: string]: string };

  constructor(private readonly localStorage: LocalStorageService) {
  }

  setToken(token: string): void{
    if (token) {
      this.jwtToken = token;
      console.log('Storing token: ' + token);
      this.localStorage.set('token', token);
    }
  }

  decodeToken(): void {
    if (this.jwtToken) {
      this.decodedToken = jwt_decode(this.jwtToken);
    }
  }

  getDecodeToken(): { [key: string]: string } | undefined {
    return jwt_decode(this.jwtToken as string);
  }

  getUser(): string | null{
    this.decodeToken();
    return this.decodedToken ? this.decodedToken.displayname : null;
  }

  getEmailId(): string | null{
    this.decodeToken();
    return this.decodedToken ? this.decodedToken.email : null;
  }

  getExpiryTime(): string | null {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken.exp : null;
  }

  isTokenExpired(): boolean {
    const expiryTime: string | null = this.getExpiryTime() ;
    if (expiryTime) {
      return ((+expiryTime * 1000 ) - (new Date()).getTime()) < 5000;
    } else {
      return false;
    }
  }
}
