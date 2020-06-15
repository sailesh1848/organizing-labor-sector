import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovAddEmployerComponent } from './gov-add-employer.component';

describe('GovAddEmployerComponent', () => {
  let component: GovAddEmployerComponent;
  let fixture: ComponentFixture<GovAddEmployerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovAddEmployerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovAddEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
