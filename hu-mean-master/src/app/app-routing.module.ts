import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { TasksComponent } from './tasks/tasks.component';
import { UsersComponent } from './users/users.component';
import { BoxCircleObservablesComponent } from './box-circle-observables/box-circle-observables.component';

const routes: Routes = [
  {
    path:'',
    component : TodoAppComponent
  },
  {
    path : 'tasks',
    component : TasksComponent
  },
  {
    path : 'users',
    component : UsersComponent
  },
  {
    path : 'box-circle-observables',
    component : BoxCircleObservablesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
