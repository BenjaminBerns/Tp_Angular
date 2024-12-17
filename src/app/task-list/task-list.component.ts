import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task, TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  imports: [NgFor, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})

export class TaskListComponent {

  taskService = new TaskService();

  tasks = this.taskService.GetAllTasks();

  newTask = "";

  isBackgroundBlack: boolean = false;

  toggleBackground(): void {
    this.isBackgroundBlack = !this.isBackgroundBlack;
  }
}

