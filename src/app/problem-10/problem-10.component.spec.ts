import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Problem10Component } from './problem-10.component';

describe('Problem10Component', () => {
  let component: Problem10Component;
  let fixture: ComponentFixture<Problem10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Problem10Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Problem10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
