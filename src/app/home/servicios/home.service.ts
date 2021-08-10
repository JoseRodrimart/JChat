import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GetUsuarioDTO} from '../../interface/get-usuario-dto';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  URL_ENDPOINT = 'http://localhost:8080/user/me';
  constructor(private readonly http: HttpClient) {}

  getDatosUsuario(): Observable<GetUsuarioDTO>{
    return this.http.get<GetUsuarioDTO>(this.URL_ENDPOINT, {withCredentials: true});
  }
}
