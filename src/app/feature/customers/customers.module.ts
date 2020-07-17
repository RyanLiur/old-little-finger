import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { PaymentCardNumberPipe } from 'src/app/shared/payment-card-number.pipe';


@NgModule({
  declarations: [CustomerListComponent, PaymentCardNumberPipe],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CustomersModule { }
