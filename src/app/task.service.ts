import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

//   tasks  = [
//     new Task('Benjamin'),
//     new Task("Au secours !")
//  ];
//  newTask = "";

defaultTasks: Task[] = [];

monStockage = localStorage;

 initLocalStorage():void{
  const taskStorage = this.monStockage.getItem('tasks');
  if (!taskStorage) {
      this.defaultTasks = [
      new Task('travailler', false,  new Date(), new Date(Date.now() + 24 * 60 * 60 * 1000), "Romain", "personnel", "normal"),
      new Task('uriner', false,  new Date(), new Date(Date.now() + 24 * 60 * 60 * 1000), "Eddy", "personnel", "importante"),
      new Task('marvel rivals', false,  new Date(), new Date(Date.now() + 24 * 60 * 60 * 1000), "Loris", "personnel", "faible")
    ];
    this.monStockage.setItem('tasks', JSON.stringify(this.defaultTasks));
  }
  else{
    this.defaultTasks = JSON.parse(taskStorage).map(
      (task: Task) => new Task(task.name, task.completed, task.dateCreation, task.dateEcheance, task.user, task.type, task.criticite)
    );
  }
 }

 addTaskL(name: string, completed: boolean = false, dateCreation: Date = new Date(), dateEcheance: Date, user: string, type: string, criticite: string): void {
    const taskobj = new Task(name, completed, dateCreation, dateEcheance, user, type, criticite);
    this.defaultTasks.push(taskobj);
    this.updateLocalStorage();
}

 GetAllTasksL(): Task[] {
  return this.defaultTasks;
}

GetTaskL(index: number): Task {
  return this.defaultTasks[index];
}

modifEtatL(index: number): void {
  this.defaultTasks[index].completed = !this.defaultTasks[index].completed;
  this.updateLocalStorage();
}

MajTaskL(index: number, MajTask: Task): void {
  this.defaultTasks[index] = MajTask;
  this.updateLocalStorage();
}


removeTaskL(index: number): void {
  this.defaultTasks.splice(index, 1);
  this.updateLocalStorage();
}

private updateLocalStorage(): void {
  this.monStockage.setItem('tasks', JSON.stringify(this.defaultTasks));
}

EditL(index: number, task: Task, libelle: string, state: boolean, dc: Date, de: Date, user: string, type: string, criticite: string): void {
  task.name = libelle;
  task.completed = state;
  task.dateCreation = dc;
  task.dateEcheance = de;
  task.user = user;
  task.type = type;
  task.criticite = criticite;
  this.defaultTasks[index].name = task.name;
  this.defaultTasks[index].completed = task.completed;
  this.defaultTasks[index].dateCreation = task.dateCreation;
  this.defaultTasks[index].dateEcheance = task.dateEcheance;
  this.defaultTasks[index].user = task.user;
  this.defaultTasks[index].type = task.type;
  this.defaultTasks[index].criticite = task.criticite;
  this.updateLocalStorage();
}

refreshPage(): void {
  window.location.reload();
}


//  GetAllTasks(): Task[]{
//   return this.tasks;
//  }

//   GetTask(index: number): Task{
//     return this.tasks[index];
//   }

//  modifEtat(index : number): void{
//    this.tasks[index].completed = !this.tasks[index].completed;
//  }
 
//  addTask(val: string): void {
//    if (val && val.trim() !== '') {
//     const taskobj = new Task(val);
//      this.tasks.push(taskobj);
//    }
//  }

//   Edit(task: Task, libelle: string, state: boolean):void{
//     task.name = libelle;
//     task.completed = state;
//   }

//   MajTask(index: number, MajTask: any): void {
//     this.tasks[index] = MajTask;
//   }

//   removeTask(index : number): void {
//       this.tasks.splice(index, 1);
//   }

  constructor() { 
    this.initLocalStorage();
  }
}

export class Task implements iTask{
  constructor(public name: string, public completed: boolean = false, public dateCreation: Date = new Date(), public dateEcheance: Date, public user: string, public type: string, public criticite: string){}
}

export interface iTask {
  name: string;
  completed: boolean;
  dateCreation: Date;
  dateEcheance: Date;
  user: string;
  type: string;
  criticite: string;
 }
 