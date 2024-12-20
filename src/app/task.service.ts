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


 initLocalStorage():void{
  if (!localStorage.getItem('tasks')) {
    const defaultTasks = [
      new Task('Benjamin'),
      new Task('Au secours !'),
    ];
    localStorage.setItem('tasks', JSON.stringify(defaultTasks));
  }
 }

 addTaskL(val: string): void {
  if (val && val.trim() !== '') {
    const tasks = this.GetAllTasksL();
    const taskobj = new Task(val);
    tasks.push(taskobj);
    this.updateLocalStorage(tasks);
  }
}

 GetAllTasksL(): Task[] {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
}

GetTaskL(index: number): Task {
  const tasks = this.GetAllTasksL();
  return tasks[index];
}

modifEtatL(index: number): void {
  const tasks = this.GetAllTasksL();
  tasks[index].completed = !tasks[index].completed;
  this.updateLocalStorage(tasks);
}

MajTaskL(index: number, MajTask: Task): void {
  const tasks = this.GetAllTasksL();
  tasks[index] = MajTask;
  this.updateLocalStorage(tasks);
}


removeTaskL(index: number): void {
  const tasks = this.GetAllTasksL();
  tasks.splice(index, 1);
  this.updateLocalStorage(tasks);
}

private updateLocalStorage(tasks: Task[]): void {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

EditL(task: Task, libelle: string, state: boolean): void {
  task.name = libelle;
  task.completed = state;
  const tasks = this.GetAllTasksL();
  const index = tasks.findIndex((t) => t.name === task.name);
  if (index !== -1) {
    tasks[index] = task;
    this.updateLocalStorage(tasks);
  }
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
  constructor(public name: string, public completed: boolean = false ){

  }
}

export interface iTask {
  name: string;
  completed: boolean;
 }