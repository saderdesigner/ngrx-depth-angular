import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector, createReducer,
  createSelector,
  MetaReducer, on
} from '@ngrx/store';
import {environment} from "@environments/environment";
import {decrement, increment} from "@app/counter/state/counter.actions";

export const counterFeatureKey = 'counter';

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0
}

export const reducer = createReducer(
  initialState,
  on(increment, (state) => ({...state, count: state.count + 1})),
  on(decrement, (state) => ({...state, count: state.count - 1})),
);


export const metaReducers: MetaReducer<CounterState>[] = !environment.production ? [] : [];
