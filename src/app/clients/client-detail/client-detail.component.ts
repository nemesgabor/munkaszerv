import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../../shared/clients.model';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {
  @Input() clientItem: Client;

  constructor() { }

  ngOnInit() {
  }

}
