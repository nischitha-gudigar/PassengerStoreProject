import { createReducer, on } from '@ngrx/store';
import {
  resetPassengerDetails,
  setPassengerDetails
} from './passenger-details.actions';
import { PassengerDetails } from './passenger-details.state';

const passengerDetails: PassengerDetails = null;

const _passengerReducer = createReducer(
  passengerDetails,
  on(setPassengerDetails, (state, { passengerDetails }) => {
    console.log(passengerDetails);
    return { ...passengerDetails };
  }),
  on(resetPassengerDetails, state => (state = null))
);

export function passengerReducer(state, action) {
  return _passengerReducer(state, action);
}
