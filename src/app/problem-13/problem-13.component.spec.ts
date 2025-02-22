import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Problem13Component } from './problem-13.component';

describe('Problem13Component', () => {
  let component: Problem13Component;
  let fixture: ComponentFixture<Problem13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Problem13Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Problem13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
