import { Injectable } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  fav = [];
  complete = []; 
  incomplete = [];

  todoList: Todo[] = [
    {
      id: 1,
      title: 'Todo One',
      isCompleted: false,
      isFavorite: false,
      date: new Date('4-15-2022')
    },
    {
      id: 2,
      title: 'Todo Two',
      isCompleted: false,
      isFavorite: false,
      date: new Date('5-15-2022')
    },
    {
      id: 3,
      title: 'Todo Three',
      isCompleted: false,
      isFavorite: false,
      date: new Date('6-15-2022')
    }
  ];

  constructor(private deletePopup: ToastrService) { }

  deleteTodo(item) {
    let index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);

    let cIndex = this.complete.indexOf(item);
    this.complete.splice(cIndex, 1);

    let pIndex = this.complete.indexOf(item);
    this.incomplete.splice(pIndex,1);
  }

  addTodo(title) {
    let id = this.todoList.length + 2;

    const item: Todo = {
      id: id,
      isCompleted: false,
      isFavorite: false,
      date: new Date(),
      title: title
    }
    this.todoList.unshift(item);
  }

  updateFav(){
    this.fav = JSON.parse(localStorage.getItem('favorite'));
  }

  updateComplete(){
    this.complete = JSON.parse(localStorage.getItem('complete'));
  }

  updatePending(){
    this.incomplete = JSON.parse(localStorage.getItem('pending'));
  }
}
