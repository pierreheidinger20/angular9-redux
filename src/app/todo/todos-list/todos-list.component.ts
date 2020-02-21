import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../model/todo.model';
import { validFilters } from 'src/app/filter/filter.actions';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  todos:Todo[]=[];
  filter:validFilters;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.todos = state.todos;
      this.filter = state.filter;
    });
  }

}
