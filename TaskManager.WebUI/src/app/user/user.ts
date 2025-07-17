import { Component,  EventEmitter,  Input, Output, output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';  
import { type AppUser } from './appUser.model';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: false,
  // imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input({ required: true }) user!: AppUser;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter();
  // select = output<string>() // This code can be used if you want to use the output decorator directly

get imagePath(){
    return 'assets/users/' + this.user.avatar;
}

  onSelectUser() {
    // Logic to handle user selection can be added here
    console.log(`UserComponent: Selected user: ${this.user.name}`);
    this.select.emit(this.user.id);
  }
}
