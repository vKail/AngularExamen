export interface Project {
    _id?: number;
    name: string;
    description: string;
    dueDate: string;
    status: 'new' | 'in-progress' | 'resolved' | 'closed';
  }