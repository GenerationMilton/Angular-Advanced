import { Component, computed, Input, Output, EventEmitter, output } from '@angular/core';



@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required:true }) user!: {
    id: string;
    avatar: string;
    name: string;
  };

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
