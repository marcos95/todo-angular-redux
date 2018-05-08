import { Todo } from './todo/todo.model';

export interface AppState {
  todos: Todo[];
  filter: string;
}
