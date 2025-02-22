import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Problem15Component } from './problem-15.component';

describe('Problem15Component', () => {
  let component: Problem15Component;
  let fixture: ComponentFixture<Problem15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Problem15Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Problem15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
