import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Problem16Component } from './problem-16.component';

describe('Problem16Component', () => {
  let component: Problem16Component;
  let fixture: ComponentFixture<Problem16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Problem16Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Problem16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
