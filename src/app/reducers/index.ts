import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../environments/environment';
import * as fromCount from '../pages/counter/reducers/counter.reducer';

export interface State {
  count: fromCount.State;
}

export const reducers: ActionReducerMap<State> = {
  count: fromCount.reducer,
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.log('metaReducer');

    return reducer(state, action);
  };
}


export const metaReducers: MetaReducer<State>[] = !environment.production ? [
  logger,
  storeFreeze,
] : [];
