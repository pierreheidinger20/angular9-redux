import { Component, OnInit } from '@angular/core';

import * as fromFilter from '../../filter/filter.actions';
import * as fromTodo from '../todo.actions';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todos-footer',
  templateUrl: './todos-footer.component.html',
  styleUrls: ['./todos-footer.component.css']
})
export class TodosFooterComponent implements OnInit {

  validFilters: fromFilter.validFilters[] = ['all','active','completed'];

  filterNow:fromFilter.validFilters;
  actives:number;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe( state => {
      this.filterNow = state.filter;
      this.countActive(state.todos);
    });
  }

  changeFilter(filter:fromFilter.validFilters){
    const action = new fromFilter.SetFilterAction(filter);
    this.store.dispatch(action);
  }

  countActive(todos:Todo[]){
    this.actives = todos.filter( todo => !todo.complete).length;
  }
  deleteAllComplete(){
    const action = new fromTodo.DeleteAllCompleteTodoAction();
    this.store.dispatch(action);
  }
}
