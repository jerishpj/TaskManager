import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserTask } from './userTask.model';
import { Card } from "../../shared/card/card";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input({required: true}) userTask!: UserTask;
  @Output() complete = new EventEmitter<number>();

  onCompleteClick() {
    // Logic to handle task completion can be added here
    console.log(`TaskComponent: Completed button clicked for task: ${this.userTask.title}`);
    this.userTask.completed = true; // Mark the task as completed
    this.complete.emit(this.userTask.id);
  }
}
