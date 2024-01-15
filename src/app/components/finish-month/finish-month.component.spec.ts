import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishMonthComponent } from './finish-month.component';

describe('FinishMonthComponent', () => {
  let component: FinishMonthComponent;
  let fixture: ComponentFixture<FinishMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinishMonthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinishMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
