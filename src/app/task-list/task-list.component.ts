import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  imports: [NgFor, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})

export class TaskListComponent {
  tasks  = [{name : "benjamin1", etat : false},
     {name : "benjamin 2", etat : false},
    {name : "okkkkk", etat : false}
  ];
  newTask = "";

  modifEtat(index : number): void{
    this.tasks[index].etat = !this.tasks[index].etat;
  }
  
  addTask(): void {
    if (this.newTask && this.newTask.trim() !== '') {
      this.tasks.push({ name: this.newTask.trim(), etat: false });
      this.newTask = '';
    }
}

  removeTask(index : number): void {
      this.tasks.splice(index, 1);
}

isBackgroundBlack: boolean = false;

toggleBackground(): void {
  this.isBackgroundBlack = !this.isBackgroundBlack;
}
}

