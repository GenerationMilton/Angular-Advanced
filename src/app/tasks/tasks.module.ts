import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, FormsModule, SharedModule, DatePipe],
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  exports: [TasksComponent],
})
export class TasksModule {}
