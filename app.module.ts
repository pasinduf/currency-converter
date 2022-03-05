import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UsdCurrencyComponent } from './usd-currency/usd-currency.component';
import { JpyCurrencyComponent } from './jpy-currency/jpy-currency.component';
import { CurrencyService } from './currency-service.service';

@NgModule({
  declarations: [AppComponent, UsdCurrencyComponent, JpyCurrencyComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [CurrencyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
