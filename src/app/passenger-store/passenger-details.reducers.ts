import { createReducer, on } from '@ngrx/store';
import {
  resetPassengerDetails,
  setPassengerDetails
} from './passenger-details.actions';

export const initialState = null;

const _passengerReducer = createReducer(
  initialState,
  on(setPassengerDetails, (state, payload) => {
    return state + 1;
  }),
  on(resetPassengerDetails, (state, payload) => {
    return state - 1;
  })
);

export function passengerReducer(state, action) {
  return _passengerReducer(state, action);
}
