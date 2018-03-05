import { Action } from '@ngrx/store';


export enum CounterActionTypes {
  Increment = '[Counter] Increment',
  Decrement = '[Counter] Decrement',
  Reset     = '[Counter] Reset'
}



export class Increment implements Action {
  readonly type = CounterActionTypes.Increment;
  readonly payload: { counter: number };
  constructor(n: number) {
    this.payload = {
      counter: n,
    };
  }
}

export class Decrement implements Action {
  readonly type = CounterActionTypes.Decrement;
  readonly payload: { counter: number };
  constructor(n: number) {
    this.payload = {
      counter: n,
    };
  }
}

export class Reset implements Action {
  readonly type = CounterActionTypes.Reset;
}

export type CounterActions = Increment | Decrement | Reset;
