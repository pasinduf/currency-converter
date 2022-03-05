import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsdCurrencyComponent } from './usd-currency.component';

describe('UsdCurrencyComponent', () => {
  let component: UsdCurrencyComponent;
  let fixture: ComponentFixture<UsdCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsdCurrencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsdCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
