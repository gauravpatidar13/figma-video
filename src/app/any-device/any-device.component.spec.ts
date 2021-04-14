import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnyDeviceComponent } from './any-device.component';

describe('AnyDeviceComponent', () => {
  let component: AnyDeviceComponent;
  let fixture: ComponentFixture<AnyDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnyDeviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnyDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
