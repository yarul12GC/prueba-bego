import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetails2Component } from './card-details2.component';

describe('CardDetails2Component', () => {
  let component: CardDetails2Component;
  let fixture: ComponentFixture<CardDetails2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDetails2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
