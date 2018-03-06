// import { reducer, initialState } from './counter.reducer';
import * as fromCounter from './counter.reducer';
import * as CounterActions from '../actions/counter.actions';

describe('Counter Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = fromCounter.reducer(undefined, action);

      expect(result).toBe(fromCounter.initialState);
    });

    it('counter plus one.', () => {
      const action = new CounterActions.Increment(1);
      const result = fromCounter.reducer(fromCounter.initialState, action);
      expect(result.count).toBe(1);
    });

    it('counter minus one.', () => {
      const action = new CounterActions.Decrement(1);
      const result = fromCounter.reducer(fromCounter.initialState, action);
      expect(result.count).toBe(-1);
    });

    it('counter plus five', () => {
      const action = new CounterActions.Increment(5);
      const result = fromCounter.reducer(fromCounter.initialState, action);
      expect(result.count).toBe(5);
    });

    it('counter minus five', () => {
      const action = new CounterActions.Decrement(5);
      const result = fromCounter.reducer(fromCounter.initialState, action);
      expect(result.count).toBe(-5);
    });
  });
});
