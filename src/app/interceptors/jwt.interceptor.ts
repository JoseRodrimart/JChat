import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {LoginService} from '../login/services/login/login.service';
import {LocalStorageService} from '../services/localStorage/local-storage.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private readonly loginService: LoginService,
              private readonly localStorage: LocalStorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.localStorage.get('token');
    if (!request.url.endsWith('/auth/login')) {
      request = request.clone({
        url:  request.url,
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(request);
  }
}
