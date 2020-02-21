import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { AddTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todos-add',
  templateUrl: './todos-add.component.html',
  styleUrls: ['./todos-add.component.css']
})
export class TodosAddComponent implements OnInit {

  txtInput:FormControl;

  constructor(private store: Store<AppState>) { 
    
  }

  ngOnInit(): void {
    this.txtInput = new FormControl('',Validators.required)
  }

  addTodo(){
    
    if(this.txtInput.invalid) return;

    const action = new AddTodoAction(this.txtInput.value);

    this.store.dispatch(action);

    this.txtInput.setValue('');
  }
}
