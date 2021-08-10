import {Component, OnDestroy, OnInit} from '@angular/core';
import {Client, IFrame, IMessage, Stomp} from '@stomp/stompjs';
import {HomeService} from './servicios/home.service';
import {GetUsuarioDTO} from '../interface/get-usuario-dto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  url = 'ws://localhost:8080/chat';

  welcomeUser?: GetUsuarioDTO;

  showFiller = false;

  private client!: Client;

  constructor(private readonly homeService: HomeService) {}

  ngOnInit(): void {
    this.client = Stomp.client(this.url);

    this.client.onConnect = (frame: IFrame) => {

      this.client.subscribe('/broker/mensajes/1', (message: IMessage) => {
        if (message.body) {
          console.log('got message with body ' + message.body);
        } else {
          console.log('got empty message');
        }
      }, {});

      this.client.publish({destination: '/app/grupos/1', headers: {}, body: 'Hello, STOMP'});

    };

    this.client.activate();

    this.homeService.getDatosUsuario().subscribe((userData: GetUsuarioDTO) => {
      this.welcomeUser = userData;
    });

  }

  ngOnDestroy(): void {
    this.client.deactivate();
  }

}
