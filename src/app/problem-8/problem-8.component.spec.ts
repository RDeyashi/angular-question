import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Problem8Component } from './problem-8.component';

describe('Problem8Component', () => {
  let component: Problem8Component;
  let fixture: ComponentFixture<Problem8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Problem8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Problem8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
