import { createReducer, on } from '@ngrx/store';
import {
  resetPassengerDetails,
  setPassengerDetails
} from './passenger-details.actions';

export const passengerDetails = null;

const _passengerReducer = createReducer(
  passengerDetails,
  on(setPassengerDetails, (state, { passengerDetails }) => passengerDetails),
  on(resetPassengerDetails, state => (state = null))
);

export function passengerReducer(state, action) {
  return _passengerReducer(state, action);
}
