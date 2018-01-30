import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaAddComponent } from './idea-add.component';

describe('IdeaAddComponent', () => {
  let component: IdeaAddComponent;
  let fixture: ComponentFixture<IdeaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
