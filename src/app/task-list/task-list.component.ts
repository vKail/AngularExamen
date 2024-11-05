import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jg-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  projectId: string = '';
  tasks = [
    { _id: '1', title: 'Task 1', description: 'Task description 1', dueDate: '2024-12-02', status: 'new', project: '1' },
    // Otras tareas
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.projectId = this.route.snapshot.paramMap.get('projectId') || '';
    this.tasks = this.tasks.filter(task => task.project === this.projectId);
  }
}