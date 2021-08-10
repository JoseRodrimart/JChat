import {Component, Input, OnInit} from '@angular/core';
import {GetUsuarioDTO} from '../../interface/get-usuario-dto';

@Component({
  selector: 'app-chat-sidenav',
  templateUrl: './chat-sidenav.component.html',
  styleUrls: ['./chat-sidenav.component.scss']
})
export class ChatSidenavComponent implements OnInit {

  @Input() welcomeUser?: GetUsuarioDTO;

  constructor() { }

  ngOnInit(): void {
  }

}
