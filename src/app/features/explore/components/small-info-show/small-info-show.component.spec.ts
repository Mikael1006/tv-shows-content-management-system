import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallInfoShowComponent } from './small-info-show.component';

describe('SmallInfoShowComponent', () => {
  let component: SmallInfoShowComponent;
  let fixture: ComponentFixture<SmallInfoShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallInfoShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallInfoShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
