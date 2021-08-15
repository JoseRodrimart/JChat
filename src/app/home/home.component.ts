import {Component, OnDestroy, OnInit} from '@angular/core';
import {Client, IFrame, IMessage, Stomp} from '@stomp/stompjs';
import {HomeService} from './servicios/home.service';
import {GetUsuarioDTO} from '../interface/get-usuario-dto';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';

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
  isHandset: Observable<BreakpointState> = this.observer.observe(Breakpoints.Handset);


  constructor(private readonly homeService: HomeService, private observer: BreakpointObserver) {}

  ngOnInit(): void {
    this.client = Stomp.client(this.url);

    this.client.onConnect = (frame: IFrame) => {

      this.client.subscribe('/topic/messages', (message: IMessage) => {
        if (message.body) {
          console.log('got message with body ' + message.body);
        } else {
          console.log('got empty message');
        }
      }, {});

      this.client.publish({destination: '/app/status', headers: {}, body: 'Hello, STOMP'});

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
