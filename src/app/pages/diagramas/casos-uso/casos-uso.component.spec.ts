import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasosUsoComponent } from './casos-uso.component';

describe('CasosUsoComponent', () => {
  let component: CasosUsoComponent;
  let fixture: ComponentFixture<CasosUsoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasosUsoComponent]
    });
    fixture = TestBed.createComponent(CasosUsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
