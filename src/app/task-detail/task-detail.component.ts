import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-detail',
  imports: [FormsModule, NgIf],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.css'
})
export class TaskDetailComponent {

  task: any; 
  taskService = new TaskService();
  tasks = this.taskService.GetAllTasksL();
  id: number = 0; 
  modifLibelle = "";
  modifEtat =  true;
  edit: boolean = false;

  constructor(private route: ActivatedRoute) {
  this.id = Number(this.route.snapshot.paramMap.get('index'));
  }

  actif():void{
    this.edit = true;
    this.modifEtat = this.task.completed;
    this.modifLibelle = this.task.name;
  }

  inactif():void{
    this.edit = false;
  }

  reloadTasks(): void {
    this.task = this.taskService.GetAllTasksL(); // Recharger la liste des tâches
  }
  

  ngOnInit(): void {
    this.task = this.taskService.GetTaskL(this.id);
  }
}
