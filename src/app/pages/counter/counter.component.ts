import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as CounterActions from './actions/counter.actions';
import * as fromCount from './reducers/counter.reducer';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter$: Observable<fromCount.State>;

  constructor(private store: Store<fromCount.State>) {
    this.counter$ = store.pipe(select('count'));
  }


  ngOnInit() {
  }

  increment(n: number): void {
    // this.store.dispatch({ type: CounterActions.Increment, payload:  n });
    this.store.dispatch(new CounterActions.Increment(n));
  }

  decrement(n: number): void {
    // this.store.dispatch({ type: CounterActions.Decrement, payload: n });
    this.store.dispatch(new CounterActions.Decrement(n));
  }

  reset() {
    // this.store.dispatch({ type: CounterActions.Reset });
    this.store.dispatch(new CounterActions.Reset());
  }

}
