import { Action } from '@ngrx/store'


export const SET_FILTER = `[Filter]  Set Filtro`;

export type validFilters = 'all' | 'completed' | 'active';


export class SetFilterAction implements Action {
    readonly type = SET_FILTER;
    constructor(public filter:validFilters){}
}

export type actions = SetFilterAction;