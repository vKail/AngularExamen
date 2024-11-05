export interface Task {
    _id?: number;
    title: string;
    description: string;
    dueDate: string;
    status: 'new' | 'in-progress' | 'resolved' | 'closed';
    project_id: number;
  }