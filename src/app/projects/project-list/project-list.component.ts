import { Component, OnInit } from '@angular/core';
import { Project } from '../../shared/project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [
    new Project(1, 'Test', 'Test', 'Test', 'Test', 'Test', 'Test', 'Test'),
    new Project(1, 'Test2', 'Test2', 'Test2', 'Test2', 'Test2', 'Test2', 'Test2'),
    new Project(1, 'Test3', 'Test3', 'Test3', 'Test3', 'Test3', 'Test3', 'Test3')
  ];

  constructor() { }

  ngOnInit() {
  }

}
