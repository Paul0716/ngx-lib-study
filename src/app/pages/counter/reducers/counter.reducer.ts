import { Action } from '@ngrx/store';
import { CounterActionTypes } from '../actions/counter.actions';

export interface State {
  count: number;
}

export const initialState: State = {
  count: 0,
};

export interface CounterAction extends Action {
  payload: {
    counter: number;
  };
}


export function reducer(state: State = initialState, action: CounterAction): State {
  switch (action.type) {
    case CounterActionTypes.Increment:
      return {
        ...state,
        count: state.count + action.payload.counter,
      };
    case CounterActionTypes.Decrement:
      return {
        ...state,
        count: state.count - action.payload.counter,
      };
    case CounterActionTypes.Reset:
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
}
