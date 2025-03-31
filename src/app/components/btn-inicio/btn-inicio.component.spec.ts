import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnInicioComponent } from './btn-inicio.component';

describe('BtnInicioComponent', () => {
  let component: BtnInicioComponent;
  let fixture: ComponentFixture<BtnInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnInicioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
