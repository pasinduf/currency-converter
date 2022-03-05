import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency-service.service';

@Component({
  selector: 'app-usd-currency',
  templateUrl: './usd-currency.component.html',
  styleUrls: ['./usd-currency.component.css'],
})
export class UsdCurrencyComponent implements OnInit {
  constructor(private _currencyService: CurrencyService) {}

  usdValue = 0;

  ngOnInit(): void {
    this._currencyService.getUSDValue().subscribe((value) => {
      this.usdValue = value;
    });
  }

  onChange() {
    this._currencyService.setJPYVAlue(this.usdValue);
  }
}
