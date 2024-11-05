import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from './models/Project.interface';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  getProjects() {
    return this.http.get<Project[]>('/api/projects');
  }

  createProject(project: Project) {
    return this.http.post<Project>('/api/projects', project);
  }

  updateProject(projectId: string, updates: Partial<Project>) {
    return this.http.patch<Project>(`/api/projects/${projectId}`, updates);
  }

  deleteProject(projectId: string) {
    return this.http.delete(`/api/projects/${projectId}`);
  }
}