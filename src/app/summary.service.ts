import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { setPassengerDetails } from './passenger-store/passenger-details.actions';
import { PassengerDetails } from './passenger-store/passenger-details.state';

@Injectable()
export class SummaryService {
  constructor(private store: Store) {}
  private _summaryDetails: [];

  private set summaryDetails(val) {
    this._summaryDetails = val;
  }

  private get summaryDetails() {
    return this._summaryDetails;
  }

  getDetails() {
    return this.summaryDetails;
  }
  setDetails(val) {
    this.summaryDetails = val;
    let passengerDetails = val;
    this.store.dispatch(setPassengerDetails(passengerDetails));
  }
}
