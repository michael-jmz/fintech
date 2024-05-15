import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosBancariosComponent } from './servicios-bancarios.component';

describe('ServiciosBancariosComponent', () => {
  let component: ServiciosBancariosComponent;
  let fixture: ComponentFixture<ServiciosBancariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiciosBancariosComponent]
    });
    fixture = TestBed.createComponent(ServiciosBancariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
