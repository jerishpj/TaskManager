import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: false,
  // imports: [Header, User, Tasks],
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
