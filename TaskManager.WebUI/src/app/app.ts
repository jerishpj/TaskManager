import { Component } from '@angular/core';
import { Header } from "./header/header";
import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from "./tasks/tasks";

@Component({
  selector: 'app-root',
  imports: [Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'TaskManager.WebUI';
  users = DUMMY_USERS
  selectedUserId = '';

  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId);
  }

  onUserSelect(id: string) {
    console.log(`AppComponent: User selected: ${id}`);
    this.selectedUserId = id;
  }
}
