import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IranSanctionsComponent } from './iran-sanctions.component';

describe('IranSanctionsComponent', () => {
  let component: IranSanctionsComponent;
  let fixture: ComponentFixture<IranSanctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IranSanctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IranSanctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
