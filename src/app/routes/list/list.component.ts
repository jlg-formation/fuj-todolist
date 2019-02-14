import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  selectedRecords: Set<TodoRecord> = new Set<TodoRecord>();

  f = new FormGroup({
    text: new FormControl('', [Validators.required]),
    isUrgent: new FormControl(false, [])
  });

  constructor() { }

  ngOnInit() {
    this.todolist = [
      { text: 'Faire la vaisselle', isUrgent: false },
      { text: 'Changer la couette', isUrgent: false },
    ];
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
      const index = this.todolist.findIndex(x => x === r);
      this.todolist.splice(index, 1);
    });
    this.selectedRecords.clear();
  }

}
