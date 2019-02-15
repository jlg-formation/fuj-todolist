import { Injectable } from '@angular/core';
import { TodoRecord } from './todorecord.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  

  todolist: TodoRecord[];

  constructor() { }

  set(array: TodoRecord[]) {
    this.todolist = array;
  }

  remove(r: TodoRecord) {
    const index = this.todolist.findIndex(x => x === r);
    this.todolist.splice(index, 1);
  }

  push(r: TodoRecord): any {
    this.todolist.push(r);
  }

  list(): TodoRecord[] {
    return this.todolist;
  }

}
