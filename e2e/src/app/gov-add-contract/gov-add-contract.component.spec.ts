import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovAddContractComponent } from './gov-add-contract.component';

describe('GovAddContractComponent', () => {
  let component: GovAddContractComponent;
  let fixture: ComponentFixture<GovAddContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovAddContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovAddContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
