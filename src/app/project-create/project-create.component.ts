// project-create.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { Project } from '../models/Project.interface';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent {
  project: Project = {
    name: '',
    description: '',
    dueDate: '',
    status: 'new',
  };

  constructor(
    private router: Router,
    private projectService: ProjectService
  ) {}

  saveProject() {
    this.projectService.createProject(this.project)
      .subscribe(
        (newProject) => {
          console.log('Proyecto guardado:', newProject);
          this.router.navigate(['/projects']);
        },
        (error) => {
          console.error('Error al guardar el proyecto:', error);
        }
      );
  }
}