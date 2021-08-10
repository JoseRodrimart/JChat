import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserLoginRequest, UserLoginResponse} from '../../../interface/user-login.interface';
import {Observable} from 'rxjs';
import {JWTTokenService} from '../../../services/JWTToken/jwttoken.service';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  URL_ENDPOINT = 'http://localhost:8080/auth/login';

  constructor(private readonly http: HttpClient, private readonly jwtTokenService: JWTTokenService) { }

  logUser(loginUser: UserLoginRequest): Observable<UserLoginResponse> {
    return this.http.post<UserLoginResponse>(this.URL_ENDPOINT, loginUser);
  }
}
