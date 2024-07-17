import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespligueComponent } from './despligue.component';

describe('DespligueComponent', () => {
  let component: DespligueComponent;
  let fixture: ComponentFixture<DespligueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DespligueComponent]
    });
    fixture = TestBed.createComponent(DespligueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
