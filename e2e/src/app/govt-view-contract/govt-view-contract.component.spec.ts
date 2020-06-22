import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovtViewContractComponent } from './govt-view-contract.component';

describe('GovtViewContractComponent', () => {
  let component: GovtViewContractComponent;
  let fixture: ComponentFixture<GovtViewContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovtViewContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovtViewContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
