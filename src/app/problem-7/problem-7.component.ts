import { Component } from '@angular/core';
import { CustomInputComponent } from "./custom-input/custom-input.component";

@Component({
  selector: 'app-problem-7',
  standalone: true,
  imports: [CustomInputComponent],
  templateUrl: './problem-7.component.html',
  styleUrl: './problem-7.component.scss'
})
export class Problem7Component {
  parentValue: string = ''

  changedValue(message:any){
    this.parentValue = message
  }
}
