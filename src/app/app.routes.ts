import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { RouterModule } from '@angular/router';

export const routes: Routes = [{ path: 'tasks', component: TaskListComponent }];
