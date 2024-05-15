import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BancaMinoristaComponent } from './banca-minorista.component';

describe('BancaMinoristaComponent', () => {
  let component: BancaMinoristaComponent;
  let fixture: ComponentFixture<BancaMinoristaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BancaMinoristaComponent]
    });
    fixture = TestBed.createComponent(BancaMinoristaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
