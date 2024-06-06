import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramasEsquemabddComponent } from './diagramas-esquemabdd.component';

describe('DiagramasEsquemabddComponent', () => {
  let component: DiagramasEsquemabddComponent;
  let fixture: ComponentFixture<DiagramasEsquemabddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiagramasEsquemabddComponent]
    });
    fixture = TestBed.createComponent(DiagramasEsquemabddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
