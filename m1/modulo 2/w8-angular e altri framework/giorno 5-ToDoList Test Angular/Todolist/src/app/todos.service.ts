
import { Injectable } from '@angular/core';
import { Todo } from './todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
   todos: Todo[] = [];

  getTodos(): Promise<Todo[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...this.todos]);
      }, 2000);
    });
  }

  addTodo(todo: Todo): Promise<Todo> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.todos.push(todo);
        resolve(todo);
      }, 2000);
    });
  }

  deleteTodo(id: number): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.todos = this.todos.filter((t) => t.id !== id);
        resolve();
      }, 2000);
    });
  }


}
