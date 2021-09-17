import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeBoxComponent } from './three-box.component';

describe('ThreeBoxComponent', () => {
  let component: ThreeBoxComponent;
  let fixture: ComponentFixture<ThreeBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
