import { Component, Input } from '@angular/core';
import { Task } from "./task/task";
import { NewTaskData, UserTask } from './task/userTask.model';
import { NewTask } from './new-task/new-task';
import { TasksService } from './tasks.service';

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
  private taskService: TasksService;

  constructor(taskService: TasksService) {
    this.taskService = taskService;
  }


  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    // Logic to handle adding a new task can be added here
    console.log('TasksComponent: Start adding a new task');
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    // Logic to handle canceling task addition can be added here
    console.log('TasksComponent: Closing a new task window');
    this.isAddingTask = false;
  }
}
