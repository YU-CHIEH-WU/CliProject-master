import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquaredmirrorComponent } from './squaredmirror.component';

describe('SquaredmirrorComponent', () => {
  let component: SquaredmirrorComponent;
  let fixture: ComponentFixture<SquaredmirrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SquaredmirrorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquaredmirrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
