import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Problem12Component } from './problem-12.component';

describe('Problem12Component', () => {
  let component: Problem12Component;
  let fixture: ComponentFixture<Problem12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Problem12Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Problem12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
