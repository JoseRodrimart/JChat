import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import { ChatSidenavComponent } from './chat-sidenav/chat-sidenav.component';

@NgModule({
  declarations: [HomeComponent, ChatSidenavComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
