import { Component, OnInit } from '@angular/core';
import { Client } from '../shared/clients.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  selectedClient:Client;
  constructor() { }

  ngOnInit() {
  }

}
