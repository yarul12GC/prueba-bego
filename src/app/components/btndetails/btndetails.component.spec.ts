import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtndetailsComponent } from './btndetails.component';

describe('BtndetailsComponent', () => {
  let component: BtndetailsComponent;
  let fixture: ComponentFixture<BtndetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtndetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtndetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
