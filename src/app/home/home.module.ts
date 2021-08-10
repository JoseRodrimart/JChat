import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { ChatSidenavComponent } from './chat-sidenav/chat-sidenav.component';
import {MaterialModule} from '../shared/material/material.module';

@NgModule({
  declarations: [
    HomeComponent,
    ChatSidenavComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
