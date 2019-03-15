import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Edit.CustomerPage } from './edit.customer.page';

describe('Edit.CustomerPage', () => {
  let component: Edit.CustomerPage;
  let fixture: ComponentFixture<Edit.CustomerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Edit.CustomerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Edit.CustomerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
