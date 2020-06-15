import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovViewLabourersComponent } from './gov-view-labourers.component';

describe('GovViewLabourersComponent', () => {
  let component: GovViewLabourersComponent;
  let fixture: ComponentFixture<GovViewLabourersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovViewLabourersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovViewLabourersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
