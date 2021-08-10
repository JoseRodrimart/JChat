import {Component, OnDestroy, OnInit} from '@angular/core';
import {Client, IFrame, IMessage, Stomp} from '@stomp/stompjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  title = 'JChat';
  url = 'ws://localhost:8080/chat';

  private client!: Client;

  constructor() {}

  ngOnInit(): void {
    this.client = Stomp.client(this.url);

    this.client.onConnect = (frame: IFrame) => {
      console.log('Conectados: ' + this.client.connected + ' : ' + frame);
      this.client.subscribe('/topic/messages', (message: IMessage) => {
        if (message.body) {
          alert('got message with body ' + message.body);
        } else {
          alert('got empty message');
        }
      }, {});
      this.client.publish({destination: '/app/status', headers: {}, body: 'Hello, STOMP'});
    };

    this.client.activate();

  }

  ngOnDestroy(): void {
    this.client.deactivate();
  }

}
