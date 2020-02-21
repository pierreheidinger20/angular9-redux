import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TodoComponent } from './todo/todo.component';
import { TodosListComponent } from './todo/todos-list/todos-list.component';
import { TodosItemComponent } from './todo/todos-item/todos-item.component';
import { TodosFooterComponent } from './todo/todos-footer/todos-footer.component';
import { TodosAddComponent } from './todo/todos-add/todos-add.component';

import { StoreModule } from '@ngrx/store';
import { todoReducer } from './todo/todo.reducer';
import { appReducers } from './app.reducers';
import { FilterPipe } from './filter/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TodoComponent,
    TodosListComponent,
    TodosItemComponent,
    TodosFooterComponent,
    TodosAddComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
