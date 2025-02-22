import { Component, ViewChild,  } from '@angular/core';
import { DynamicLoadDirective } from './dynamic-load.directive';

@Component({
  selector: 'app-problem-1',
  standalone: true,
  imports: [DynamicLoadDirective],
  templateUrl: './problem-1.component.html',
  styleUrl: './problem-1.component.scss'
})
export class Problem1Component {
  @ViewChild(DynamicLoadDirective, {static: true}) dynamicLoadDirective!: DynamicLoadDirective

  loadComponent(){
    console.log('dynamic comp clicked')
    this.dynamicLoadDirective.loadComponent();
  }
}
