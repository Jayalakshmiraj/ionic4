import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Add.StudentPage } from './add.student.page';

describe('Add.StudentPage', () => {
  let component: Add.StudentPage;
  let fixture: ComponentFixture<Add.StudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Add.StudentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Add.StudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
