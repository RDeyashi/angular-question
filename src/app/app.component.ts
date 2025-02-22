import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatAutocompleteModule} from '@angular/material/autocomplete'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatAutocompleteModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-question';
}
