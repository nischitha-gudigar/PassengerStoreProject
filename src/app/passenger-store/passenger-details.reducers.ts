import { createReducer, on } from '@ngrx/store';
import {
  resetPassengerDetails,
  setPassengerDetails
} from './passenger-details.actions';
import { PassengerDetails } from './passenger-details.state';

const initialState: PassengerDetails = null;

const _passengerReducer = createReducer(
  initialState,
  on(setPassengerDetails, (state, { passengerDetails }) => {
    console.log(passengerDetails);
    return { ...state, passengerDetails };
  }),
  on(resetPassengerDetails, (state, action) => {
    return { ...state, action };
  })
);

export function passengerReducer(state, action) {
  return _passengerReducer(state, action);
}
