export interface Project {
    _id: string;
    name: string;
    description: string;
    dueDate: string;
    status: 'new' | 'in-progress' | 'resolved' | 'closed';
    createdBy: string;
  }