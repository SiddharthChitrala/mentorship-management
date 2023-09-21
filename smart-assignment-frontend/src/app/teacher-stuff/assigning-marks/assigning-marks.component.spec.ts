import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigningMarksComponent } from './assigning-marks.component';

describe('AssigningMarksComponent', () => {
  let component: AssigningMarksComponent;
  let fixture: ComponentFixture<AssigningMarksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssigningMarksComponent]
    });
    fixture = TestBed.createComponent(AssigningMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
