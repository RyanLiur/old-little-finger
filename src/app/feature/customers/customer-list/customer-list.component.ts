import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  paymentForm: FormGroup;
  cardNumberSub: Subscription;
  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.initForm();

    this.cardNumberSub = this.paymentForm.get('cardNumber').valueChanges.subscribe(
      val => {
        const numString = this.numberChanger(val);
        this.paymentForm.patchValue(
          { cardNumber: numString },
          { emitEvent: false }
        );
        this.cd.detectChanges();
    });
  }

  initForm() {
    this.paymentForm = this.fb.group(
      {
        cardNumber: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(16),
            Validators.maxLength(19),
            Validators.pattern('^[0-9 ]*$')
          ])
        ]
      }
    );
  }

  /**
   * hold only number
   * @param value input string
   */
  numberChanger(value: string) {
    return value.replace(/\s+/gi, '').replace(/[^0-9]/gi, '');
  }
}
