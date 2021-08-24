import { createReducer, on } from '@ngrx/store';
import {
  resetPassengerDetails,
  setPassengerDetails
} from './passenger-details.actions';

export const passengerDetails = null;

const _passengerReducer = createReducer(
  passengerDetails,
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
