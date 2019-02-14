import { Component, OnInit } from '@angular/core';

interface TodoRecord {
  text: string;
  isUrgent: boolean;
};

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  todolist: TodoRecord[];

  constructor() { }

  ngOnInit() {
    this.todolist = [
      { text: 'Faire la vaisselle', isUrgent: false },
      { text: 'Changer la couette', isUrgent: false },
    ];
  }

}
