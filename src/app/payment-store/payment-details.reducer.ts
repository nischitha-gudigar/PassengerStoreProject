import { createReducer, on } from '@ngrx/store';
import {
  resetPaymentDetails,
  setPaymentDetails
} from './payment-details.actions';
import { PaymentDetails } from './payment-details.state';

const initialState: PaymentDetails = null;

const _paymentReducer = createReducer(
  initialState,
  on(setPaymentDetails, (state, action) => {
    return { ...state, ...action };
  }),
  on(resetPaymentDetails, (state, action) => {
    return (state = null);
  })
);

export function paymentReducer(state, action) {
  return _paymentReducer(state, action);
}
