import { createReducer, on } from '@ngrx/store';
import {
  resetPaymentDetails,
  setPaymentDetails
} from './payment-details.actions';

export const paymentDetails = null;

const _paymentReducer = createReducer(
  paymentDetails,
  on(setPaymentDetails, (state, { paymentDetails }) => paymentDetails),
  on(resetPaymentDetails, state => (state = null))
);

export function paymentReducer(state, action) {
  return _paymentReducer(state, action);
}
