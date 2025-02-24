import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCounter } from './store/counter.selector';
import { decrement, increment } from './store/counter.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-problem-12',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './problem-12.component.html',
  styleUrl: './problem-12.component.scss'
})
export class Problem12Component {
  count$!: Observable<number>;

  constructor(private store: Store){
    this.count$ = this.store.select(selectCounter);
  }

  increase(){
    this.store.dispatch(increment());
  }

  decrease(){
    this.store.dispatch(decrement());
  }
}
