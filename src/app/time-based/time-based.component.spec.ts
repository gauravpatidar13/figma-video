import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeBasedComponent } from './time-based.component';

describe('TimeBasedComponent', () => {
  let component: TimeBasedComponent;
  let fixture: ComponentFixture<TimeBasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeBasedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeBasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
