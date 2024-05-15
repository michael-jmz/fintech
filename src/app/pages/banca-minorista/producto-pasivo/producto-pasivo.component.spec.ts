import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoPasivoComponent } from './producto-pasivo.component';

describe('ProductoPasivoComponent', () => {
  let component: ProductoPasivoComponent;
  let fixture: ComponentFixture<ProductoPasivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductoPasivoComponent]
    });
    fixture = TestBed.createComponent(ProductoPasivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
