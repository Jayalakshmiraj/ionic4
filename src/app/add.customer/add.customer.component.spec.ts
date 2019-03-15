import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Add.CustomerPage } from './add.customer.page';

describe('Add.CustomerPage', () => {
  let component: Add.CustomerPage;
  let fixture: ComponentFixture<Add.CustomerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Add.CustomerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Add.CustomerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
