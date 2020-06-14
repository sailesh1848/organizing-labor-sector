import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditEmployerComponent } from './admin-edit-employer.component';

describe('AdminEditEmployerComponent', () => {
  let component: AdminEditEmployerComponent;
  let fixture: ComponentFixture<AdminEditEmployerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditEmployerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
