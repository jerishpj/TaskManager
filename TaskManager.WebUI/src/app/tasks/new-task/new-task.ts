import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Output() cancel = new EventEmitter<void>();

  onCancel() {
    // Logic to handle canceling task addition can be added here
    console.log('NewTaskComponent: Cancel adding a new task');
    this.cancel.emit();
  }

}
