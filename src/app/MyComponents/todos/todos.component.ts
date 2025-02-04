import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../Todo';
import { TodoItemComponent } from "../todo-item/todo-item.component";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',  
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  Todos: Todo[];
  constructor() { 
    this.Todos = [
      {
        sno: 1,
        title: "This is title 1",
        desc: "This is description 1",
        active: true
      },
      {
        sno: 2,
        title: "This is title 2",
        desc: "This is description 2",
        active: true
      },
    ]
  }

  ngOnInit(): void {
  }

}
