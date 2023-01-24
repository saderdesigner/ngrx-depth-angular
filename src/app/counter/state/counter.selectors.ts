import { createFeatureSelector, createSelector } from '@ngrx/store';
import {CounterState} from "@app/counter/state/reducers";

export const selectCounterState = createFeatureSelector<CounterState>('counter');

export const selectCount = createSelector(
  selectCounterState,
  (state: CounterState) => state.count
);
