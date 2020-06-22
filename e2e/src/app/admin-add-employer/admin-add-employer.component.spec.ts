import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddEmployerComponent } from './admin-add-employer.component';

describe('AdminAddEmployerComponent', () => {
  let component: AdminAddEmployerComponent;
  let fixture: ComponentFixture<AdminAddEmployerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddEmployerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
