import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { type NewTaskData } from '../task/userTask.model'; // Assuming NewTask is defined in userTask.model.ts
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  // imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();
  newTask: NewTaskData = {
    title: '',
    summary: '',
    dueDate: ''
  };

  private taskService = inject(TasksService);
  
   onCancel() {
    // Logic to handle canceling task addition can be added here
    console.log('NewTaskComponent: Cancel adding a new task');
    this.close.emit();
  }

  onSubmit(taskData: NewTaskData) {
    // Logic to handle form submission can be added here
    console.log('NewTaskComponent: Submit new task');
    console.log(`Title: ${taskData.title}, Summary: ${taskData.summary}, Due Date: ${taskData.dueDate}`);
    this.taskService.addTask({
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
      id: this.taskService.getMaxTaskId() + 1,
      userId: this.userId,
      date: new Date().toLocaleDateString('en-CA'),
      completed: false,
      description: ''
    }); 

    this.close.emit();
  }
}
