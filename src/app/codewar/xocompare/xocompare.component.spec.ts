import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XocompareComponent } from './xocompare.component';

describe('XocompareComponent', () => {
  let component: XocompareComponent;
  let fixture: ComponentFixture<XocompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XocompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XocompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
