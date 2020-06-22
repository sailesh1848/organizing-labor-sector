import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewLabourersComponent } from './admin-view-labourers.component';

describe('AdminViewLabourersComponent', () => {
  let component: AdminViewLabourersComponent;
  let fixture: ComponentFixture<AdminViewLabourersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewLabourersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewLabourersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
