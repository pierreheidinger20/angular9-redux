import { Component, OnInit } from '@angular/core';
import { ToggleAllTodoAction } from './todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  allComplete:boolean;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
  }

  toggleAll(){
    
    this.allComplete = !this.allComplete;

    var action = new ToggleAllTodoAction(this.allComplete);
    this.store.dispatch(action);
  }
}
