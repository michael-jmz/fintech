import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhorrosComponent } from './ahorros.component';

describe('AhorrosComponent', () => {
  let component: AhorrosComponent;
  let fixture: ComponentFixture<AhorrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AhorrosComponent]
    });
    fixture = TestBed.createComponent(AhorrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
