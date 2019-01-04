import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardSanctionComponent } from './standard-sanction.component';

describe('StandardSanctionComponent', () => {
  let component: StandardSanctionComponent;
  let fixture: ComponentFixture<StandardSanctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardSanctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardSanctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
