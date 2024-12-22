import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { StatisticsComponentComponent } from './statistics-component/statistics-component.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'tasks', component: TaskListComponent},
    {path: 'task/:index', component: TaskDetailComponent},
    {path: 'statistics', component: StatisticsComponentComponent},
 ];
