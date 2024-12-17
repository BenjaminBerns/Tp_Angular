import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  tasks  = [
    new Task('Benjamin'),
    new Task("Au secours !")
 ];
 newTask = "";

 GetAllTasks(): Task[]{
  return this.tasks;
 }

  GetTask(index: number): Task{
    return this.tasks[index];
  }

 modifEtat(index : number): void{
   this.tasks[index].completed = !this.tasks[index].completed;
 }
 
 addTask(val: string): void {
   if (val && val.trim() !== '') {
    const taskobj = new Task(val);
     this.tasks.push(taskobj);
   }
 }

  removeTask(index : number): void {
      this.tasks.splice(index, 1);
  }

  constructor() { }
}

export class Task implements iTask{
  constructor(public name: string, public completed: boolean = false ){

  }
}

export interface iTask {
  name: string;
  completed: boolean;
 }