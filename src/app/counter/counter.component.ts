import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {CounterState} from "@app/counter/state/reducers";
import {map, Observable} from "rxjs";
import {decrement, increment} from "@app/counter/state/counter.actions";
import {selectCount} from "@app/counter/state/counter.selectors";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  count: Observable<number>;

  constructor(
    private store: Store<CounterState>
  ) {
    this.count = this.store.select(selectCount);
  }

  ngOnInit(): void {
  }

  increase() {
    this.store.dispatch(increment());
  }

  decrease() {
    this.store.dispatch(decrement());
  }
}
