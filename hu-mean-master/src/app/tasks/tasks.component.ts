import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ta-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  todoList = [{
    text: 'Go shopping',
    done: false
  }, {
    text: 'Write code',
    done: false
  }, {
    text: 'Review submissions',
    done: false
  }];
  constructor() { }

  ngOnInit() {
  }
  addNewTodo(newTodoText) {
    const newTodo = {
      text: newTodoText,
      done: false
    };
    this.todoList.push(newTodo);
  }

}
