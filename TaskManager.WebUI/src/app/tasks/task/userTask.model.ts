
export interface UserTask {
  id: number;
  userId: string;
  title: string;
  date: string;
  summary: string;
  description: string;
  completed: boolean;
  dueDate: string;
}

export interface NewTaskData {
  title: string;
  summary: string;
  dueDate: string;
}