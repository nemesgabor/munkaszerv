import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Client } from '../../shared/clients.model';
@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  @Output() ClientItemSelected= new EventEmitter<Client>()
  clients: Client[] = [
    new Client(1,"Teszt1","Teszt"),
    new Client(2,"Teszt2","Teszt"),
    new Client(3,"Teszt3","Teszt"),
    new Client(4,"Teszt4","Teszt"),
  ];

  constructor() { }

  ngOnInit() {
  }

  onClientSelected(client: Client){
    this.ClientItemSelected.emit(client);
  }
}
