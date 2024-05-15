import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoActivoComponent } from './producto-activo.component';

describe('ProductoActivoComponent', () => {
  let component: ProductoActivoComponent;
  let fixture: ComponentFixture<ProductoActivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductoActivoComponent]
    });
    fixture = TestBed.createComponent(ProductoActivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
