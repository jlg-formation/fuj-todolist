import { Injectable } from '@angular/core';
import { TodoRecord } from './todorecord.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const endpoint = `${environment.domain}/ws/task`;

@Injectable({
  providedIn: 'root'
})
export class TodoListRestService {

  todolist: TodoRecord[] = [];

  constructor(private http: HttpClient) { }

  synchro() {
    this.http.get<{content: TodoRecord[]}>(endpoint)
        .subscribe(data => this.todolist = data.content);
  }

  set(array: TodoRecord[]) {
      this.synchro();
  }

  remove(r: TodoRecord) {
    this.http.delete(`${endpoint}/${r._id}`).subscribe(data => this.synchro());
  }

  push(r: TodoRecord): any {
    this.http.post(endpoint, r).subscribe(data => this.synchro());
  }

  list(): TodoRecord[] {
    return this.todolist;
  }
}
