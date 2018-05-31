import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { LimitToPipe } from './pipes/limit-to.pipe';
import { TasksComponent } from './tasks/tasks.component';
import { UsersComponent } from './users/users.component';
import { UsersService } from './services/users.service';
import { TodoBoxComponent } from './components/todo-box/todo-box.component';
import { TodoCircleComponent } from './components/todo-circle/todo-circle.component';
import { BoxCircleObservablesComponent } from './box-circle-observables/box-circle-observables.component';
import { ColorserviceService } from './services/colorservice.service';


@NgModule({
  declarations: [
    AppComponent,
    TodoAppComponent,
    TodoInputComponent,
    TodoListComponent,
    LimitToPipe,
    TasksComponent,
    UsersComponent,
    TodoBoxComponent,
    TodoCircleComponent,
    BoxCircleObservablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UsersService,ColorserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
