import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Task } from '../task.service';

@Component({
  selector: 'app-statistics-component',
  standalone: true,
  imports: [NgxChartsModule, CommonModule, BrowserModule],
  templateUrl: './statistics-component.component.html',
  styleUrl: './statistics-component.component.css'
})

export class StatisticsComponentComponent implements OnInit {
  tasks: Task[] = [];
  chartData: any[] = [];
  view: [number, number] = [700, 400]; 

  ngOnInit(): void {
    this.loadTasksFromLocalStorage();
    this.prepareChartData();
  }

  loadTasksFromLocalStorage(): void {
    const tasksFromStorage = localStorage.getItem('tasks');
    if (tasksFromStorage) {
      this.tasks = JSON.parse(tasksFromStorage);
      console.log('Tasks loaded from localStorage:', this.tasks); 
    } else {
      console.log('No tasks found in localStorage');
    }
  }
  
  prepareChartData(): void {
   const taskStats: { [key: string]: number } = this.tasks.reduce((acc, task) => {
      const key = task.type + ' - ' + (task.completed ? 'Complété' : 'Non Complété');
      if (!acc[key]) {
        acc[key] = 0;
      }
      acc[key]++;
      return acc;
    }, {} as { [key: string]: number });
    
    this.chartData = Object.keys(taskStats).map(key => ({
      name: key,
      value: taskStats[key]
    }));
    
    console.log('Chart Data:', this.chartData);  
  }    
}
