import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlledGoodsComponent } from './controlled-goods.component';

describe('ControlledGoodsComponent', () => {
  let component: ControlledGoodsComponent;
  let fixture: ComponentFixture<ControlledGoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlledGoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlledGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
