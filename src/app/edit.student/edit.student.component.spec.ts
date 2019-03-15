import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Edit.StudentPage } from './edit.student.page';

describe('Edit.StudentPage', () => {
  let component: Edit.StudentPage;
  let fixture: ComponentFixture<Edit.StudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Edit.StudentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Edit.StudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
