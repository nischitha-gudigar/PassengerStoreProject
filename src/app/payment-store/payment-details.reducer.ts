import { createReducer, on } from '@ngrx/store';
import {
  resetPaymentDetails,
  setPaymentDetails
} from './payment-details.actions';

export const initialState = null;

const _paymentReducer = createReducer(
  initialState,
  on(setPaymentDetails, (state, payload) => {
    return state + 1;
  }),
  on(resetPaymentDetails, (state, payload) => {
    return state - 1;
  })
);

export function paymentReducer(state, action) {
  return _paymentReducer(state, action);
}
