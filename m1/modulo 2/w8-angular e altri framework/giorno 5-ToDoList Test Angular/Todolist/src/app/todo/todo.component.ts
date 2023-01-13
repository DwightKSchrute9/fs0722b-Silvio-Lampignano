import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todo } from '../todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit {
 public todos: Todo[] = [];
 public todoTitle = '';

 constructor(public todosService: TodosService) {}

 ngOnInit(): void {}

//GET
getTodos(){}

//ADD
addTodo(todoTitle: string) {
let newId = 0;

if (this.todos.length) {
  newId = Math.max(...this.todos.map(t => t.id)) + 1;
}

let completed = false;

const todo = { newId, todoTitle, completed } as unknown as Todo;

this.todosService.addTodo(todo);
}

//DELETE
deleteTodo(id: number){
  const index = this.todos.findIndex(t => t.id === id);
  if (index >= 0) {
    this.todos.splice(index, 1);
  }
}

}


