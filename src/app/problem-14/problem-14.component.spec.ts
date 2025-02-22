import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Problem14Component } from './problem-14.component';

describe('Problem14Component', () => {
  let component: Problem14Component;
  let fixture: ComponentFixture<Problem14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Problem14Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Problem14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
