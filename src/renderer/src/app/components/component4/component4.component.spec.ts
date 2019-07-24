import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component4Component } from './component4.component';

describe('Component4Component', () => {
  let component: Component4Component;
  let fixture: ComponentFixture<Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
