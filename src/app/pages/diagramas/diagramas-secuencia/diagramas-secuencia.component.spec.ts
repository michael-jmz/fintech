import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramasSecuenciaComponent } from './diagramas-secuencia.component';

describe('DiagramasSecuenciaComponent', () => {
  let component: DiagramasSecuenciaComponent;
  let fixture: ComponentFixture<DiagramasSecuenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiagramasSecuenciaComponent]
    });
    fixture = TestBed.createComponent(DiagramasSecuenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
