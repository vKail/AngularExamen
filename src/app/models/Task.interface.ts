export interface Task {
    _id: string;
    title: string;
    description: string;
    dueDate: string;
    status: 'new' | 'in-progress' | 'resolved' | 'closed';
    project: string;
  }