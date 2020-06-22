import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovViewEmployersComponent } from './gov-view-employers.component';

describe('GovViewEmployersComponent', () => {
  let component: GovViewEmployersComponent;
  let fixture: ComponentFixture<GovViewEmployersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovViewEmployersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovViewEmployersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
