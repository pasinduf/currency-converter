import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JpyCurrencyComponent } from './jpy-currency.component';

describe('JpyCurrencyComponent', () => {
  let component: JpyCurrencyComponent;
  let fixture: ComponentFixture<JpyCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JpyCurrencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JpyCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
