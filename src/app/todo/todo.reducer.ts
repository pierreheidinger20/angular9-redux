import * as fromTodo from './todo.actions';
import { Todo } from './model/todo.model';


const todo1 = new Todo('Save to world');
const todo2 = new Todo('swimming today');

todo2.complete = true;

const initState: Todo[] = [todo1,todo2];


export function todoReducer(state = initState,action:fromTodo.Actions):Todo[]
{
    switch(action.type){
        case fromTodo.ADD_TODO:
            const todo = new Todo(action.text);
            return [...state,todo];
        case fromTodo.TOGGLE_TODO:            
            return state.map(todo =>{

                if(todo.id === action.id)
                {
                    return {
                        ...todo,
                        complete: !todo.complete
                    }
                }else
                {
                    return todo;
                }

            });
        case fromTodo.TOGGLE_ALL_TODO:
            return state.map(todo =>{
                return {
                    ...todo,
                    complete: action.complete
                }
            });          
        case fromTodo.EDIT_TODO:
            return state.map( todo =>{

                if(todo.id === action.id)
                {
                    return {
                        ...todo,
                        text: action.text
                    }
                }else
                {
                    return todo;
                }

            });
        case fromTodo.DELETE_TODO:
            return state.filter(todo => todo.id !== action.id);
        case fromTodo.DELETE_ALL_COMPLETE_TODO:
                return state.filter(todo => !todo.complete);
        default:
            return state;
    }
}