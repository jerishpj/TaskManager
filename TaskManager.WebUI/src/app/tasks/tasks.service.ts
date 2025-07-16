import { Injectable } from "@angular/core";
import { UserTask } from "./task/userTask.model";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks: UserTask[] = [
    { id:1, userId: 'u1', title: 'Task 1', date: '2023-12-31', summary: 'Summary of Task 1', dueDate: '2023-12-31', description: 'Description of Task 1', completed: false },
    { id:2, userId: 'u2', title: 'Task 2', date: '2023-12-31', summary: 'Summary of Task 2', dueDate: '2023-12-31', description: 'Description of Task 2', completed: false },
    { id:3, userId: 'u3', title: 'Task 3', date: '2023-12-31', summary: 'Summary of Task 3', dueDate: '2023-12-31', description: 'Description of Task 3', completed: false }
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    } else {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }

    getUserTasks(userId: string): UserTask[] {
        return this.tasks.filter(task => task.userId === userId && !task.completed);
    }

    getMaxTaskId(): number {
        return this.tasks.length > 0 ? Math.max(...this.tasks.map(task => task.id || 0)) : 0;
    }

    addTask(newTask: UserTask): void {
        //this.tasks.push(newTask);
        this.tasks.unshift(newTask); // Add new task to the beginning of the list
        this.saveTasksToLocalStorage();

        console.log(`TasksService: Added new task with ID ${newTask.id}`);
    }

    removeTask(taskId: number): void {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        this.saveTasksToLocalStorage();
        console.log(`TasksService: Removed task with ID ${taskId}`);
    }

    completeTask(taskId: number): void {
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = true;
            this.saveTasksToLocalStorage();
            console.log(`TasksService: Marked task with ID ${taskId} as completed`);
        } else {
            console.error(`TasksService: Task with ID ${taskId} not found`);
        }
    }

    private saveTasksToLocalStorage(): void {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    } 
}