import { NgModule } from "@angular/core";
import { App } from "./app";
import { Header } from "./header/header";
import { User } from "./user/user";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";

@NgModule({
  declarations: [App, Header, User],
  bootstrap: [App],
  imports: [BrowserModule, SharedModule, TasksModule],
})
export class AppModule {
  // This is the root module of the application.
  // It can be used to import other modules, declare components, and provide services.
  // Currently, it does not contain any specific declarations or imports.
}