import { Action } from '@ngrx/store'

export const ADD_TODO= `[TODO] Add Todo`;
export const TOGGLE_TODO = `[TODO] Toggle Todo`
export const TOGGLE_ALL_TODO = `[TODO] Toggle All Todo`
export const EDIT_TODO = `[TODO] Edit Todo`;
export const DELETE_TODO = `[TODO] Delete Todo`;
export const DELETE_ALL_COMPLETE_TODO = `[TODO] Delete All Complete Todo`;

export class AddTodoAction implements Action{
    readonly type = ADD_TODO;
    constructor(public text:string){};
}

export class ToggleTodoAction implements Action{
    readonly type = TOGGLE_TODO;
    constructor(public id:number){}
}
export class ToggleAllTodoAction implements Action{
    readonly type = TOGGLE_ALL_TODO;
    constructor(public complete:boolean){}
}

export class EditTodoAction implements Action{
    readonly type = EDIT_TODO;
    constructor(public id:number,public text:string){}
}

export class DeleteTodoAction implements Action{
    readonly type = DELETE_TODO;
    constructor(public id:number){}
}

export class DeleteAllCompleteTodoAction implements Action{
    readonly type = DELETE_ALL_COMPLETE_TODO;
    constructor(){}
}

export type Actions = AddTodoAction | 
                      ToggleTodoAction |
                      EditTodoAction |
                      DeleteTodoAction |
                      ToggleAllTodoAction |
                      DeleteAllCompleteTodoAction;