import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramasClasesComponent } from './diagramas-clases.component';

describe('DiagramasClasesComponent', () => {
  let component: DiagramasClasesComponent;
  let fixture: ComponentFixture<DiagramasClasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiagramasClasesComponent]
    });
    fixture = TestBed.createComponent(DiagramasClasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
