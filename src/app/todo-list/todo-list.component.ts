import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  constructor(public todoService: TodoService, public route: ActivatedRoute) { }

  viewList: boolean = true;
  complete: boolean = false;
  incomplete: boolean = false;

  ngOnInit(): void {
    this.route.url.subscribe(data => {
      if (data[0].path == 'list') {
        this.viewList = true;
      }
      else if (data[0].path == 'completed') {
        this.viewList = false;
        this.incomplete = false;
        this.complete = true;
        this.todoService.updateComplete();
      }
      else {
        this.todoService.incomplete = this.todoService.todoList;
        this.viewList = false;
        this.complete = false;
        this.incomplete = true;
        this.todoService.updatePending();
      }
    })
  }
}
