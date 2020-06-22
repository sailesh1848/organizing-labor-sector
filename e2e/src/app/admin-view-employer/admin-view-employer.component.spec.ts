import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewEmployerComponent } from './admin-view-employer.component';

describe('AdminViewEmployerComponent', () => {
  let component: AdminViewEmployerComponent;
  let fixture: ComponentFixture<AdminViewEmployerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewEmployerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
