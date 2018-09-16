import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JiraAsiaComponent } from './jira-asia.component';

describe('JiraAsiaComponent', () => {
  let component: JiraAsiaComponent;
  let fixture: ComponentFixture<JiraAsiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JiraAsiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JiraAsiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
