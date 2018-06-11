import {
    createAction
} from 'redux-actions';

let nextTodoId = 0;
export const addTodo = createAction(
    'ADD_TODO', (text = {}) => ({
        id: nextTodoId++,
        text,
        completed: false
    })
);

export const toggleTodo = createAction('TOGGLE_TODO');
export const removeTodo = createAction('REMOVE_TODO');
export const setVisibilityFilter = createAction('SET_VISIBILITY_FILTER');
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}