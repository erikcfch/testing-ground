import {createAction, props} from '@ngrx/store';

export const adding = createAction(
  'getIncrement',
  props<{inc: number}>(),
);

export const subtracting = createAction(
  'getDecrement',
  props<{dec: number}>(),
);

export const reset = createAction(
  'reset'
);
