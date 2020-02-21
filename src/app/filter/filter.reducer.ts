

import * as fromFilter from './filter.actions';


const initStatus:fromFilter.validFilters = 'all';

export function filterReducer(state = initStatus, action :fromFilter.actions):fromFilter.validFilters
{   
    switch(action.type)
    {
        case fromFilter.SET_FILTER:
            return action.filter;
        default: 
            return state;
    }
}