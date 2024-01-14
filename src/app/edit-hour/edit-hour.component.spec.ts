import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHourComponent } from './edit-hour.component';

describe('EditHourComponent', () => {
  let component: EditHourComponent;
  let fixture: ComponentFixture<EditHourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditHourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
