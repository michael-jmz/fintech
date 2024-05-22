import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramasRobustezComponent } from './diagramas-robustez.component';

describe('DiagramasRobustezComponent', () => {
  let component: DiagramasRobustezComponent;
  let fixture: ComponentFixture<DiagramasRobustezComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiagramasRobustezComponent]
    });
    fixture = TestBed.createComponent(DiagramasRobustezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
