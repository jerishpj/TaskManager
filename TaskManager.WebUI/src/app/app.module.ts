import { NgModule } from "@angular/core";
import { App } from "./app";
import { Header } from "./header/header";
import { Tasks } from "./tasks/tasks";
import { User } from "./user/user";
import { Card } from "./shared/card/card";
import { BrowserModule } from "@angular/platform-browser";
import { NewTask } from "./tasks/new-task/new-task";
import { Task } from "./tasks/task/task";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [App, Header, User, Card, Tasks, Task, NewTask],
  bootstrap: [App],
  imports: [BrowserModule, FormsModule],
})
export class AppModule {
  // This is the root module of the application.
  // It can be used to import other modules, declare components, and provide services.
  // Currently, it does not contain any specific declarations or imports.
}