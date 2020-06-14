import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovtDashComponent } from './govt-dash.component';

describe('GovtDashComponent', () => {
  let component: GovtDashComponent;
  let fixture: ComponentFixture<GovtDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovtDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovtDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
