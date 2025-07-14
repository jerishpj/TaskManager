import { Component,  EventEmitter,  Input, Output, output } from '@angular/core';
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
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter();
  // select = output<string>() // This code can be used if you want to use the output decorator directly

get imagePath(){
    return 'assets/users/' + this.avatar;
}

  onSelectUser() {
    // Logic to handle user selection can be added here
    console.log(`UserComponent: Selected user: ${this.name}`);
    this.select.emit(this.id);
  }
}
