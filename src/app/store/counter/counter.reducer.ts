import { Action } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './counter.action';
import { CounterState, INITIAL_COUNTER_STATE } from './counter.store';

interface CounterAction extends Action {
  payload: number;
}

export function counterReducer(state: CounterState = INITIAL_COUNTER_STATE, action: CounterAction) {
  switch (action.type) {

    case INCREMENT:
      return {
        ...state,
        counter: state.counter + action.payload,
      };

    case DECREMENT:
      return {
        ...state,
        counter: state.counter - action.payload
      };

    case RESET:
      return {
        ...state,
        counter: 0
      };

    default:
      return state;
  }
}
