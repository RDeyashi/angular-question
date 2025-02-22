import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Problem17Component } from './problem-17.component';

describe('Problem17Component', () => {
  let component: Problem17Component;
  let fixture: ComponentFixture<Problem17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Problem17Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Problem17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
