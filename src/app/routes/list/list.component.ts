import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoRecord } from 'src/app/todorecord.interface';
import { TodoListService } from 'src/app/todo-list.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  selectedRecords: Set<TodoRecord> = new Set<TodoRecord>();

  f = new FormGroup({
    text: new FormControl('', [Validators.required]),
    isUrgent: new FormControl(false, [])
  });

  constructor(public todolist: TodoListService) { }

  ngOnInit() {
    this.todolist.set([
      { text: 'Faire la vaisselle', isUrgent: false },
      { text: 'Changer la couette', isUrgent: false },
    ]);
  }

  onSubmit() {
    this.todolist.push({ ...this.f.value });
    this.reset();
  }

  reset() {
    console.log('reset');
    this.f.reset({text: 'azer' + Math.floor(Math.random() * 100), isUrgent: false});
  }

  isSelected(r: TodoRecord) {
    return this.selectedRecords.has(r);
  }

  toggleSelection(r: TodoRecord) {
    if (this.selectedRecords.has(r)) {
      this.selectedRecords.delete(r);
      return;
    }
    this.selectedRecords.add(r);
  }

  hasSelectedRecords() {
    return this.selectedRecords.size > 0;
  }

  removeSelection() {
    console.log('about to remove');
    this.selectedRecords.forEach(r => {
      this.todolist.remove(r);
    });
    this.selectedRecords.clear();
  }

}
