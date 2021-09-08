import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniBoxComponent } from './mini-box.component';

describe('MiniBoxComponent', () => {
  let component: MiniBoxComponent;
  let fixture: ComponentFixture<MiniBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
