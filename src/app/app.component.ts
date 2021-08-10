import { Component, OnDestroy, OnInit } from '@angular/core';
import {Client, IFrame, IMessage, IStompSocket, Stomp} from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  // title = 'JChat';
  // url = 'ws://localhost:8080/chat';
  //
  // private client!: Client;
  //
  constructor() {}
  //
  // ngOnInit(): void {
  //   this.client = Stomp.client(this.url);
  //
  //   this.client.onConnect = (frame: IFrame) => {
  //     console.log('Conectados: ' + this.client.connected + ' : ' + frame);
  //     this.client.subscribe('/topic/messages', (message: IMessage) => {
  //       if (message.body) {
  //         alert('got message with body ' + message.body);
  //       } else {
  //         alert('got empty message');
  //       }
  //     }, {});
  //     this.client.publish({destination: '/app/status', headers: {}, body: 'Hello, STOMP'});
  //   };
  //
  //   this.client.activate();
  //
  // }
  //
  // ngOnDestroy(): void {
  //   this.client.deactivate();
  // }
}
