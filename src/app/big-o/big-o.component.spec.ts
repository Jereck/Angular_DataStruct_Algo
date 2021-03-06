/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BigOComponent } from './big-o.component';

describe('BigOComponent', () => {
  let component: BigOComponent;
  let fixture: ComponentFixture<BigOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
