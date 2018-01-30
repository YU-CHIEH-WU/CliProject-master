import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LongestComponent } from './longest.component';

describe('LongestComponent', () => {
  let component: LongestComponent;
  let fixture: ComponentFixture<LongestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
