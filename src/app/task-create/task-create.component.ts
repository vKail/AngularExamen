// task-create.component.ts
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../models/Task.interface';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent {
  task: Task = {
    title: '',
    description: '',
    dueDate: '',
    status: 'new',
    project_id: 0
  };

  projectId: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {
    // Obtener el projectId de la URL
    this.projectId = this.route.snapshot.params['projectId'];
  }

  saveTask() {
    this.taskService.createTask( Number(this.projectId), this.task)
      .subscribe(
        (newTask) => {
          console.log('Tarea guardada:', newTask);
          this.router.navigate(['/tasks', this.task.project_id]);
        },
        (error) => {
          console.error('Error al guardar la tarea:', error);
        }
      );
  }
}