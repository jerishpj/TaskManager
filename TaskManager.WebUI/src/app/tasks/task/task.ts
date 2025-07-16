import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { UserTask } from './userTask.model';
import { Card } from "../../shared/card/card";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input({required: true}) userTask!: UserTask;
  @Output() complete = new EventEmitter<number>();
  private taskService = inject(TasksService);

  onCompleteTask() {
    // Logic to handle task completion can be added here
    console.log(`TaskComponent: Completed button clicked for task: ${this.userTask.title}`);
    
    this.taskService.completeTask(this.userTask.id);
    console.log(`TaskComponent: Task with ID ${this.userTask.id} marked as completed`);
    this.complete.emit(this.userTask.id);
  }
}
