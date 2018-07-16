import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from '../../../shared/clients.model';

@Component({
  selector: 'app-client-item',
  templateUrl: './client-item.component.html',
  styleUrls: ['./client-item.component.css']
})
export class ClientItemComponent implements OnInit {
  @Input() client: Client;
  @Output() clientSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {

  }

  onSelected() {
    this.clientSelected.emit();
  }

}
