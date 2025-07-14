
export interface UserTask {
  id: number;
  userId: string;
  title: string;
  time: string;
  summary: string;
  description: string;
  completed: boolean;
  dueDate: string;
}
