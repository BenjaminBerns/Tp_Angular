import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task, TaskService } from '../task.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-detail',
  imports: [FormsModule, NgIf],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.css'
})
export class TaskDetailComponent {

  task: Task | any; 
  taskService = new TaskService();
  tasks = this.taskService.GetAllTasksL();
  id: number = 0; 
  modifLibelle: string = "";
  modifEtat: boolean =  true;
  modifDateCreation: Date = new Date();
  modifDateEcheance: Date = new Date();
  modifType: string = "";
  modifcriticite: string = "";
  modifUser: string = "";
  edit: boolean = false;

  constructor(private route: ActivatedRoute) {
  this.id = Number(this.route.snapshot.paramMap.get('index'));
  }

  actif():void{
    this.edit = true;
    this.modifEtat = this.task.completed;
    this.modifLibelle = this.task.name;
    this.modifDateCreation = this.task.dateCreation;
    this.modifDateEcheance = this.task.dateEcheance;
    this.modifUser = this.task.user;
    this.modifType = this.task.type;
    this.modifcriticite = this.task.criticite;
  }

  inactif():void{
    this.edit = false;
  }

  ngOnInit(): void {
    this.task = this.taskService.GetTaskL(this.id);
    this.modifLibelle = this.task.name;
    this.modifEtat = this.task.completed;
    this.modifDateCreation = this.task.dateCreation;
    this.modifDateEcheance = this.task.dateEcheance;
    this.modifUser = this.task.user;
    this.modifType = this.task.type;
    this.modifcriticite = this.task.criticite;
  }
}
