import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiComponent } from './ci.component';

describe('CiComponent', () => {
  let component: CiComponent;
  let fixture: ComponentFixture<CiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CiComponent]
    });
    fixture = TestBed.createComponent(CiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
