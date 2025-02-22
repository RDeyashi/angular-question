import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Problem6Component } from './problem-6.component';

describe('Problem6Component', () => {
  let component: Problem6Component;
  let fixture: ComponentFixture<Problem6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Problem6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Problem6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
