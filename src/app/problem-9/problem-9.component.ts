import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleCasePipe } from './title-case.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-problem-9',
  standalone: true,
  imports: [CommonModule, TitleCasePipe, FormsModule],
  templateUrl: './problem-9.component.html',
  styleUrl: './problem-9.component.scss'
})
export class Problem9Component {
  inpValue=''
}
