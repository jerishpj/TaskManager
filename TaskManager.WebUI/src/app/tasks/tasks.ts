import { Component, Input } from '@angular/core';
import { Task } from "./task/task";
import { UserTask } from './task/userTask.model';
import { NewTask } from './new-task/new-task';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input() name?: string;
  @Input({required: true}) userId!: string;
  isAddingTask: boolean = false;

  tasks: UserTask[] = [
    { id:1, userId: 'u1', title: 'Task 1', time: '10:00 AM', summary: 'Summary of Task 1', dueDate: '2023-12-31', description: 'Description of Task 1', completed: false },
    { id:2, userId: 'u2', title: 'Task 2', time: '11:00 AM', summary: 'Summary of Task 2', dueDate: '2023-12-31', description: 'Description of Task 2', completed: false },
    { id:3, userId: 'u3', title: 'Task 3', time: '12:00 PM', summary: 'Summary of Task 3', dueDate: '2023-12-31', description: 'Description of Task 3', completed: false }
  ];

  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.userId);
  }

  onTaskComplete(taskId: number) {
    // Logic to handle task completion can be added here
    this.tasks = this.tasks.filter(task => task.id !== taskId);

    console.log(`TasksComponent: Removed completed task: ${taskId}`);
  }

  onStartAddTask() {
    // Logic to handle adding a new task can be added here
    console.log('TasksComponent: Start adding a new task');
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    // Logic to handle canceling task addition can be added here
    console.log('TasksComponent: Cancel adding a new task');
    this.isAddingTask = false;
  }
}
