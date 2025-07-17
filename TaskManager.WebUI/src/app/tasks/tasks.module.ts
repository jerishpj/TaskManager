import { NgModule } from "@angular/core";
import { Tasks } from "./tasks";
import { NewTask } from "./new-task/new-task";  
import { Task } from "./task/task";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [Tasks, Task, NewTask],
  imports: [CommonModule, FormsModule, SharedModule],
  exports: [Tasks],
})
export class TasksModule {} 