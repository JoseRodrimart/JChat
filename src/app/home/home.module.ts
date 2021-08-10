import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {JwtInterceptor} from '../interceptors/jwt.interceptor';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers: [/*{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }*/]

})
export class HomeModule { }
