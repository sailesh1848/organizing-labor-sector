import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewEmployersComponent } from './admin-view-employers.component';

describe('AdminViewEmployersComponent', () => {
  let component: AdminViewEmployersComponent;
  let fixture: ComponentFixture<AdminViewEmployersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewEmployersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewEmployersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
