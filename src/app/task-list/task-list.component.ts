// task-list.component.ts
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../models/Task.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  projectId: any;

  constructor(private taskService: TaskService, private route: ActivatedRoute) {
    this.projectId = this.route.snapshot.params['projectId'];
  }

  ngOnInit() {
    this.loadTasks();
  }

  

  loadTasks() {
    this.taskService.getTasks(Number(this.projectId))
      .subscribe(
        (tasks) => {
          this.tasks = tasks;
        },
        (error) => {
          console.error('Error al cargar las tareas:', error);
        }
      );
  }
}