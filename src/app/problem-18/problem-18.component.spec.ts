import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Problem18Component } from './problem-18.component';

describe('Problem18Component', () => {
  let component: Problem18Component;
  let fixture: ComponentFixture<Problem18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Problem18Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Problem18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
