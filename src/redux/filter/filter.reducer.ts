import { AllActions, SET_FILTER } from './filter.actions';

const initState = 'SHOW_ALL';

export function filterReducer(oldState = initState, action: AllActions) {
  switch (action.type) {
    case SET_FILTER: {
      return action.newFilter;
    }
  }

  return oldState;
}
