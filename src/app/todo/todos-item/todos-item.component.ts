import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { ToggleTodoAction, EditTodoAction, DELETE_TODO, DeleteTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css']
})
export class TodosItemComponent implements OnInit {

  @ViewChild('txtTextDom') txtTextDom:ElementRef;

  @Input() todo:Todo;

  chkComplete:FormControl;
  txtText:FormControl;

  edit:boolean;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {

    this.chkComplete = new FormControl(this.todo.complete);
    this.txtText = new FormControl(this.todo.text,Validators.required);

    this.chkComplete.valueChanges.subscribe(value => {
      const action = new ToggleTodoAction(this.todo.id);
      this.store.dispatch(action);
    });
  }

  editing()
  {
    this.edit = true;

    setTimeout(() => this.txtTextDom.nativeElement.select(),1)

    
  }

  endEditing()
  {
    this.edit = false;

    if(this.txtText.invalid) return;
    if(this.txtText.value === this.todo.text) return;

    const action = new EditTodoAction(this.todo.id,this.txtText.value);
    this.store.dispatch(action);

  }

  delete()
  {
    const action = new DeleteTodoAction(this.todo.id);
    this.store.dispatch(action);
  }

}
