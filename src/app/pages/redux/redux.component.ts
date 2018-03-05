import { Component, OnInit } from '@angular/core';
import { INCREMENT, DECREMENT, RESET } from '../../store/counter/counter.action';
import { counterReducer } from '../../store/counter/counter.reducer';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';
import { CounterState } from '../../store/counter/counter.store';

@Component({
  selector: 'app-redux',
  templateUrl: './redux.component.html',
  styleUrls: ['./redux.component.css']
})
export class ReduxComponent implements OnInit {
  counter$: Observable<CounterState>;

  constructor(private store: Store<CounterState>) {
    this.counter$ = store.pipe(select('count'));
  }


  ngOnInit() {
  }

  increment(n: number): void {
    this.store.dispatch({ type: INCREMENT, payload:  n });
  }

  decrement(n: number): void {
    this.store.dispatch({ type: DECREMENT, payload: n });
  }

  reset() {
    this.store.dispatch({ type: RESET });
  }

}
