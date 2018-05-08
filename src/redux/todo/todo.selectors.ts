import { createSelector } from '@ngrx/store';
import { AppState } from './../app.state';
import { Todo } from './todo.model';

export const selectTodos = (state: AppState) => state.todos;
export const selectFilter = (state: AppState) => state.filter;
export const selectResult = (todos: Todo[], filter: string) => {
  switch (filter) {
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed);
    case 'SHOW_DONE':
      return todos.filter(todo => todo.completed);
  }
  return todos;
};

export const getVisibleTodos = createSelector(selectTodos, selectFilter, selectResult);
