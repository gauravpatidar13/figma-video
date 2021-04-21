import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomRadioButtonsComponent } from './custom-radio-buttons.component';

describe('CustomRadioButtonsComponent', () => {
  let component: CustomRadioButtonsComponent;
  let fixture: ComponentFixture<CustomRadioButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomRadioButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomRadioButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
