import { MenuItem } from './shared/header.enums';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  MenuItem = MenuItem;
  loadedPage:MenuItem = MenuItem.Projects;
  newItemType:MenuItem;
  onNav(page: MenuItem){
    this.loadedPage = page;
  }
  onNewSelected(selected: MenuItem){
    this.newItemType = selected;
  }
}
