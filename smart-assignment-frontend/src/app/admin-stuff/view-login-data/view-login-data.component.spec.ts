import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLoginDataComponent } from './view-login-data.component';

describe('ViewLoginDataComponent', () => {
  let component: ViewLoginDataComponent;
  let fixture: ComponentFixture<ViewLoginDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewLoginDataComponent]
    });
    fixture = TestBed.createComponent(ViewLoginDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
