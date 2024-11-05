// project-create.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css'],
})
export class ProjectCreateComponent {
  project = {
    name: '',
    description: '',
    dueDate: '',
    status: 'new',
  };

  constructor(private router: Router) {}

  saveProject() {
    // Aquí guardarías el proyecto llamando a un servicio
    console.log('Proyecto guardado:', this.project);
    this.router.navigate(['/projects']);
  }
}
