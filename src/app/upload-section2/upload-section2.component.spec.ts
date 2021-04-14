import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadSection2Component } from './upload-section2.component';

describe('UploadSection2Component', () => {
  let component: UploadSection2Component;
  let fixture: ComponentFixture<UploadSection2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadSection2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadSection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
