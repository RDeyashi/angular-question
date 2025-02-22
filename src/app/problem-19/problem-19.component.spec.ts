import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Problem19Component } from './problem-19.component';

describe('Problem19Component', () => {
  let component: Problem19Component;
  let fixture: ComponentFixture<Problem19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Problem19Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Problem19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
