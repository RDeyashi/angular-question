import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Problem7Component } from './problem-7.component';

describe('Problem7Component', () => {
  let component: Problem7Component;
  let fixture: ComponentFixture<Problem7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Problem7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Problem7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
