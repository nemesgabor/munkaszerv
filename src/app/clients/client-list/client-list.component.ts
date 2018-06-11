import { Component, OnInit } from '@angular/core';
import { Client } from '../clients.model';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients: Client[] = [];

  constructor() { }

  ngOnInit() {
  }

}
