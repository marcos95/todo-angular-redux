import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { todosReducer } from './todo/todo.reducer';
import { filterReducer } from './filter/filter.reducer';

export const AppReducer: ActionReducerMap<AppState> = {
  todos: todosReducer,
  filter: filterReducer
};
