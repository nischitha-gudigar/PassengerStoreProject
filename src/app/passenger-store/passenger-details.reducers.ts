import { createReducer, on } from '@ngrx/store';
import {
  resetPassengerDetails,
  setPassengerDetails
} from './passenger-details.actions';
import { PassengerDetails } from './passenger-details.state';

const initialState: PassengerDetails = null;

const _passengerReducer = createReducer(
  initialState,
  on(setPassengerDetails, (state, action) => {
    return { ...state, ...action.passengerDetails };
  }),
  on(resetPassengerDetails, (state, action) => {
    return (state = null);
  })
);

export function passengerReducer(state, action) {
  return _passengerReducer(state, action);
}
