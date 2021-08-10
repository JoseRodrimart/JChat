import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {LoginService} from './services/login/login.service';
import {UserLoginRequest, UserLoginResponse} from '../interface/user-login.interface';
import {SocketService} from '../services/sockets/socket.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });


  constructor(private readonly loginService: LoginService,
              private readonly socketService: SocketService,
              private readonly route: Router) {  }

  logeaUsuario(login: UserLoginRequest): void {
    this.loginService.logUser(login).subscribe((userLoginInfo: UserLoginResponse) => {
      console.log(userLoginInfo);
      this.route.navigate(['home']);
    });
    // this.socketService.sendMessage(JSON.stringify({usuarioID: 'jose', mensaje: 'mensaje'}));
  }

  ngOnInit(): void {
  }
}
