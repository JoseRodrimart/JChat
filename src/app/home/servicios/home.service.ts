import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GetUsuarioDTO} from '../../interface/get-usuario-dto';
import {UserLoginResponse} from '../../interface/user-login.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  URL_ENDPOINT = 'http://localhost:8080/user/me';
  constructor(private readonly http: HttpClient) {}

  token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMiIsImlhdCI6MTYyODU5MDU1NiwiZXhwIjoxNjI5NDU0NTU2LCJmdWxsbmFtZSI6InRpbyBtdW5jaCIsInJvbGVzIjoiVVNFUiJ9.jjRdVHxeWUlGl-kkdeDQynJkq4ONLjECkrikS-G7tuYpBu_Nei1BGnCjXgmko0ELkNNRGBNwtt3qETii2Hi6hw';
  // cambiar por local storage

  getDatosUsuario(): Observable<GetUsuarioDTO>{
    return this.http.get<GetUsuarioDTO>(this.URL_ENDPOINT, {headers: {Authorization: `Bearer ${(this.token)}`}});
  }
}
