import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentCardNumberPipe } from './payment-card-number.pipe';
import { MetaService } from './core/service/meta.service';

@NgModule({
  declarations: [
    AppComponent,
    PaymentCardNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    MetaService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
