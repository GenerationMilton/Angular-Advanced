import { Component, computed, Input, Output, EventEmitter, output } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

// type User ={
//   id: string;
//   avatar: string;
//   name: string;
// }


@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
})
export class UserComponent {
  @Input({ required:true }) user!: User;
  @Input({ required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();
  // select = output<string>();

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

   onSelectedUser(){
    this.select.emit(this.user.id);
  }

  //signals 
  // avatar= input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(()=>{
  //   return 'assets/users/' + this.avatar();
  // })
 
}
