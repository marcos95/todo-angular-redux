import { Action } from '@ngrx/store';
import { Todo } from './todo.model';

export const TODO_ADD = '[Todos] Add';
export const TODO_REMOVE = '[Todos] Remove';
export const TODO_TOGGLE = '[Todos] Toggle';
export const TODO_UPDATE = '[Todos] Update';
export const TODO_CLEAR_COMPLETED = '[Todos] Clear completed';

export class TodoAddAction implements Action {
  readonly type = TODO_ADD;

  constructor(public newTodo: Todo) { }
}

export class TodoRemoveAction implements Action {
  readonly type = TODO_REMOVE;

  constructor(public id: string) { }
}

export class TodoToggleAction implements Action {
  readonly type = TODO_TOGGLE;

  constructor(public id: string) { }
}

export class TodoUpdateAction implements Action {
  readonly type = TODO_UPDATE;

  constructor(
    public id: string,
    public title: string) { }
}

export class ClearCompletedAction implements Action {
  readonly type = TODO_CLEAR_COMPLETED;
  constructor() {}
}


export type AllActions =
  TodoAddAction |
  TodoRemoveAction |
  TodoToggleAction |
  TodoUpdateAction |
  ClearCompletedAction;
