import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency-service.service';

@Component({
  selector: 'app-jpy-currency',
  templateUrl: './jpy-currency.component.html',
  styleUrls: ['./jpy-currency.component.css'],
})
export class JpyCurrencyComponent implements OnInit {
  jpyValue = 0;

  constructor(private _currencyService: CurrencyService) {}

  ngOnInit(): void {
    this._currencyService.getJPYVAlue().subscribe((value) => {
      this.jpyValue = value;
    });
  }

  onChange() {
    this._currencyService.setUSDValue(this.jpyValue);
  }
}
