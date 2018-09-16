import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugbustersComponent } from './bugbusters.component';

describe('BugbustersComponent', () => {
  let component: BugbustersComponent;
  let fixture: ComponentFixture<BugbustersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugbustersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugbustersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
