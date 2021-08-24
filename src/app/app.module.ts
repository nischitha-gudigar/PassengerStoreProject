import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PassengerComponent } from './passenger/passenger.component';
import { RouterModule } from '@angular/router';
import { PassengerDetailsComponent } from './passenger-details/passenger-details.component';
import { PaymentComponent } from './payment/payment.component';
import { SummaryService } from './summary.service';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'passenger', component: PassengerComponent },
      { path: '', redirectTo: 'passenger', pathMatch: 'full' },
      { path: 'payment', component: PaymentComponent }
    ])
  ],
  declarations: [
    AppComponent,
    PassengerComponent,
    PassengerDetailsComponent,
    PaymentComponent
  ],
  providers: [SummaryService],
  bootstrap: [AppComponent]
})
export class AppModule {}
