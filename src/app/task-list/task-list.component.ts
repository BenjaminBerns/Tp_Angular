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

  newTask = "";

  isBackgroundBlack: boolean = false;

  toggleBackground(): void {
    this.isBackgroundBlack = !this.isBackgroundBlack;
  }

  reloadTasks(): void {
    this.tasks = this.taskService.GetAllTasksL(); // Recharger la liste des tâches
  }
  

  constructor(public ts: TaskService) {}
}

