import { createReducer, on } from '@ngrx/store';
import {
  resetPaymentDetails,
  setPaymentDetails
} from './payment-details.actions';

const paymentDetails = null;

const _paymentReducer = createReducer(
  paymentDetails,
  on(setPaymentDetails, (state, { paymentDetails }) => {
    return { ...state, paymentDetails };
  }),
  on(resetPaymentDetails, state => (state = null))
);

export function paymentReducer(state, action) {
  return _paymentReducer(state, action);
}
