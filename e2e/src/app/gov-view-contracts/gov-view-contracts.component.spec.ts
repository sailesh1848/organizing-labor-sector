import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovViewContractsComponent } from './gov-view-contracts.component';

describe('GovViewContractsComponent', () => {
  let component: GovViewContractsComponent;
  let fixture: ComponentFixture<GovViewContractsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovViewContractsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovViewContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
