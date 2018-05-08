import { Todo } from './todo.model';
import { AllActions, TODO_ADD, TODO_REMOVE, TODO_TOGGLE, TODO_UPDATE, TODO_CLEAR_COMPLETED } from './todo.actions';

export function todosReducer(oldState: Todo[] = [], action: AllActions): Todo[] {
  switch (action.type) {
    case TODO_ADD: {
      return [...oldState, action.newTodo];
    }

    case TODO_REMOVE: {
      return oldState.filter(todo => todo.id !== action.id);
    }

    case TODO_TOGGLE: {
      return oldState.map(todo => todo.id === action.id ? { ...todo, completed: !todo.completed } : todo);
    }

    case TODO_UPDATE: {
      return oldState.map(todo => todo.id === action.id ? { ...todo, title: action.title } : todo);
    }

    case TODO_CLEAR_COMPLETED: {
      return oldState.filter(todo => !todo.completed);
    }

    default: {
      return oldState;
    }
  }
}
