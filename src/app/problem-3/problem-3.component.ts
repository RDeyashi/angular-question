import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-problem-3',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './problem-3.component.html',
  styleUrl: './problem-3.component.scss'
})
export class Problem3Component {
  message: string = '';
  count = signal(0);

  increment() {
    this.count.update((value: number) => value + 1);
    this.message = ''
  }

  decrement() {
    this.count.update((value: number) => value - 1);
    if (this.count() < 0) {
      this.count.set(0);
      this.message = `Minimum is 0`
    } else {
      this.message = ''
    }
  }
}
