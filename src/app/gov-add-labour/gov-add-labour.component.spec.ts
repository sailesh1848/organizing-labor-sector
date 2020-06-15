import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovAddLabourComponent } from './gov-add-labour.component';

describe('GovAddLabourComponent', () => {
  let component: GovAddLabourComponent;
  let fixture: ComponentFixture<GovAddLabourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovAddLabourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovAddLabourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
