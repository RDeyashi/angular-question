import { Component } from '@angular/core';
import { ChildComponent } from "./child/child.component";

@Component({
  selector: 'app-problem-6',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './problem-6.component.html',
  styleUrl: './problem-6.component.scss'
})
export class Problem6Component {
  childCompUser:string = `Rabi Deyashi`;
  messageFromChild: string = '';
  getMessage(message:string){
    this.messageFromChild = message
  }
}
