// task-create.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent {
  task = {
    title: '',
    description: '',
    dueDate: '',
    status: 'new',
    project: '',  // Este debería estar vinculado a un proyecto específico
  };

  constructor(private router: Router) {}

  saveTask() {
    // Aquí guardarías la tarea llamando a un servicio
    console.log('Tarea guardada:', this.task);
    this.router.navigate(['/tasks', this.task.project]);
  }
}
