import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  paymentForm: FormGroup;

  private setValidations() {
    const creditcardValidator = [
      Validators.required,
      Validators.pattern('^[0-9]{16}$')
    ];
    const expiryValidators = [
      Validators.required,
      Validators.pattern('^(0[1-9]|10|11|12)/[0-9]{2}$')
    ];
    const cvaValidators = [Validators.required, Validators.maxLength(3)];
    this.paymentForm.controls['creditcard'].setValidators(creditcardValidator);
    this.paymentForm.controls['expiry'].setValidators(expiryValidators);
    this.paymentForm.controls['cva'].setValidators(cvaValidators);
  }

  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      creditcard: [''],
      expiry: [''],
      cva: ['']
    });
    this.setValidations();
  }
  savePayment() {
    if (this.paymentForm.valid) {
      alert('Payment Saved successfully');
    }
  }
}
