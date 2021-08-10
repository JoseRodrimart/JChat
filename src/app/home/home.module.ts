import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { ChatSidenavComponent } from './chat-sidenav/chat-sidenav.component';
import {MaterialModule} from '../shared/material/material.module';
import { UserGridComponent } from './user-grid/user-grid.component';

@NgModule({
  declarations: [
    HomeComponent,
    ChatSidenavComponent,
    UserGridComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
