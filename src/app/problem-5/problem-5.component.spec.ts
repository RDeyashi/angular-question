import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Problem5Component } from './problem-5.component';

describe('Problem5Component', () => {
  let component: Problem5Component;
  let fixture: ComponentFixture<Problem5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Problem5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Problem5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
