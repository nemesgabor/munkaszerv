import { Component, OnInit, Input } from '@angular/core';
import { WorkTask } from '../../../shared/task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() workTask:WorkTask;
  constructor() { }

  ngOnInit() {

  }
  onSelected(){

  }
}
