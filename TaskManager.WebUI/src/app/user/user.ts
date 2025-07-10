import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';  

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  onSelectUser() {
    // Logic to handle user selection can be added here
    console.log(`Selected user: ${this.selectedUser().name}`);

    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
