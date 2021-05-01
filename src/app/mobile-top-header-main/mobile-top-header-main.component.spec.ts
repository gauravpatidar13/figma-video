import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileTopHeaderMainComponent } from './mobile-top-header-main.component';

describe('MobileTopHeaderMainComponent', () => {
  let component: MobileTopHeaderMainComponent;
  let fixture: ComponentFixture<MobileTopHeaderMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileTopHeaderMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileTopHeaderMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
