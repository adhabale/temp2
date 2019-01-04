import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultancyServicesComponent } from './consultancy-services.component';

describe('ConsultancyServicesComponent', () => {
  let component: ConsultancyServicesComponent;
  let fixture: ComponentFixture<ConsultancyServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultancyServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultancyServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
