import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.scss'
})
export class CustomInputComponent {
  @Input() value: any;
  @Output() valuChange = new EventEmitter<any>();

  inputChanges(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.valuChange.emit(inputValue);
  }
}
