import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.scss']
})
export class UserGridComponent implements OnInit {

  allUsers = [
    {username: 'Jona'},
    {username: 'Sergio'},
    {username: 'Fernando'},
    {username: 'ToallaBot'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
