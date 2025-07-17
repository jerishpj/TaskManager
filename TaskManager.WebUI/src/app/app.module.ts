import { NgModule } from "@angular/core";
import { App } from "./app";
import { Header } from "./header/header";
import { Tasks } from "./tasks/tasks";
import { User } from "./user/user";
import { Card } from "./shared/card/card";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [App],
  bootstrap: [App],
  imports: [BrowserModule, Header, User, Tasks, Card],
})
export class AppModule {
  // This is the root module of the application.
  // It can be used to import other modules, declare components, and provide services.
  // Currently, it does not contain any specific declarations or imports.
}