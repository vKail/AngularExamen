import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './models/Task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) {}

  getTasks(projectId: string) {
    return this.http.get<Task[]>(`/api/projects/${projectId}/tasks`);
  }

  createTask(projectId: string, task: Task) {
    return this.http.post<Task>(`/api/projects/${projectId}/tasks`, task);
  }

  updateTask(projectId: string, taskId: string, updates: Partial<Task>) {
    return this.http.patch<Task>(`/api/projects/${projectId}/tasks/${taskId}`, updates);
  }

  deleteTask(projectId: string, taskId: string) {
    return this.http.delete(`/api/projects/${projectId}/tasks/${taskId}`);
  }
}