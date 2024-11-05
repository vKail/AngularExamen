import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jg-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {
  projects = [
    { _id: '1', name: 'Project 1', description: 'Description 1', dueDate: '2024-12-01', status: 'new' },
    // Otros proyectos
  ];

  constructor(private router: Router) {}

  goToTasks(projectId: string) {
    this.router.navigate(['/tasks', projectId]);
  }
}