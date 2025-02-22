import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Problem20Component } from './problem-20.component';

describe('Problem20Component', () => {
  let component: Problem20Component;
  let fixture: ComponentFixture<Problem20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Problem20Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Problem20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
