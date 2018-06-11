import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { ClientsComponent } from './clients/clients.component';
import { TasksComponent } from './tasks/tasks.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ClientListComponent } from './clients/client-list/client-list.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProjectItemComponent } from './projects/project-list/project-item/project-item.component';
import { TaskItemComponent } from './tasks/task-list/task-item/task-item.component';
import { ClientItemComponent } from './clients/client-list/client-item/client-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsComponent,
    ClientsComponent,
    TasksComponent,
    ProjectListComponent,
    ClientListComponent,
    TaskListComponent,
    ProjectDetailComponent,
    ProjectItemComponent,
    TaskItemComponent,
    ClientItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
