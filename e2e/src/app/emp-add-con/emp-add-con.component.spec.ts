import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpAddConComponent } from './emp-add-con.component';

describe('EmpAddConComponent', () => {
  let component: EmpAddConComponent;
  let fixture: ComponentFixture<EmpAddConComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpAddConComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpAddConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
