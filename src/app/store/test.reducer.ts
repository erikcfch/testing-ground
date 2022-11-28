import {Action, createReducer, on} from "@ngrx/store";
import * as TestActions from "./test.actions";

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(TestActions.adding, (state: number, action) =>  {
    state = state + action.inc;
    return state;
  }),
  on(TestActions.subtracting, (state: number, action) => {
    state = state - action.dec;
    return state;
  }),
  on(TestActions.reset, (state: number) => 0),
);
