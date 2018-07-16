import { MenuItem } from '../shared/header.enums';
import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl:'./header.component.html',
  styleUrls:['./header.component.css']
})
export class HeaderComponent {
  @Output() pageSelected = new EventEmitter<MenuItem>();
  @Output() newItemSelected = new EventEmitter<MenuItem>();
  actPageSelected:MenuItem = MenuItem.Projects;
  MenuItem = MenuItem;
  onSelect(page:MenuItem){
    this.actPageSelected=page;
    this.pageSelected.emit(this.actPageSelected);
  }

  NewItem(name:MenuItem){
    this.newItemSelected.emit(name);
  }
}
