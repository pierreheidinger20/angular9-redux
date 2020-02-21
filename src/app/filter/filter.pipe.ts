import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo.model';
import { validFilters } from './filter.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(value: Todo[], filter: validFilters): Todo[] {
   
    switch(filter)
    {
      case 'completed':
        return value.filter(todo => todo.complete);
      case 'active' :
        return value.filter(todo => !todo.complete);
      default:
        return value;
    }  
  }

}
