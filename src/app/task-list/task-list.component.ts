import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task, TaskService } from '../task.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-list',
  imports: [NgFor, FormsModule, RouterLink],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})

export class TaskListComponent {

  taskService = new TaskService();

  tasks = this.taskService.GetAllTasksL();

  name: string = "";
  completed: boolean = false;
  datecrea: Date = new Date();
  dateeche: Date = new Date();
  user: string = "";
  type: string = "";
  criticite: string = "";

  isBackgroundBlack: boolean = false;

  toggleBackground(): void {
    this.isBackgroundBlack = !this.isBackgroundBlack;
  }
  
  constructor(public ts: TaskService) {}
}

