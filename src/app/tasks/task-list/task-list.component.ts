import { Component, OnInit } from '@angular/core';
import { WorkTask } from '../../shared/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  workTasks: WorkTask[] = [
    new WorkTask(1,"Teszt1","Teszt","Teszt","Teszt","Teszt","Teszt","Teszt","Teszt","Teszt","Teszt"),
    new WorkTask(2,"Teszt2","Teszt","Teszt","Teszt","Teszt","Teszt","Teszt","Teszt","Teszt","Teszt"),
    new WorkTask(3,"Teszt3","Teszt","Teszt","Teszt","Teszt","Teszt","Teszt","Teszt","Teszt","Teszt"),
    new WorkTask(4,"Teszt4","Teszt","Teszt","Teszt","Teszt","Teszt","Teszt","Teszt","Teszt","Teszt"),
  ];
  constructor() { }

  ngOnInit() {
  }

}
