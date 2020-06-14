import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddLabourerComponent } from './admin-add-labourer.component';

describe('AdminAddLabourerComponent', () => {
  let component: AdminAddLabourerComponent;
  let fixture: ComponentFixture<AdminAddLabourerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddLabourerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddLabourerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
