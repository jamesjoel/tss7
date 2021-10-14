import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Box2Component } from './box2.component';

describe('Box2Component', () => {
  let component: Box2Component;
  let fixture: ComponentFixture<Box2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Box2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Box2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
