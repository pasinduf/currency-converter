import { EventEmitter, Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CurrencyService {
  @Output() jpyValue: EventEmitter<any> = new EventEmitter();
  @Output() usdValue: EventEmitter<any> = new EventEmitter();

  setJPYVAlue(usdValue: any) {
    const jpyValue = usdValue * 114;
    this.jpyValue.emit(jpyValue);
  }

  getJPYVAlue() {
    return this.jpyValue;
  }

  setUSDValue(jpyValue: any) {
    const usdValue = jpyValue * 0.0087;
    this.usdValue.emit(usdValue);
  }

  getUSDValue() {
    return this.usdValue;
  }
}
