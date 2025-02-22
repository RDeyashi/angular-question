import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ApiCallService } from './service/api-call.service';
import { debounceTime, switchMap } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-problem-2',
  standalone: true,
  imports: [
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  templateUrl: './problem-2.component.html',
  styleUrl: './problem-2.component.scss',
  providers: [ApiCallService]
})
export class Problem2Component {
  constructor( private apiService: ApiCallService){}
  search: FormControl = new FormControl("");
  option: string[] = ['Rabi', 'Ram', 'Arnab'];

  ngOnInit(): void {
    this.search.valueChanges.pipe(
      debounceTime(300),
      switchMap(name => name ? this.apiService.getUserByName(name): [])
    ).subscribe((value:any) => {
      value.users.map((obj:any) => {
        this.option.push(`${obj.firstName} ${obj.lastName}`)  
      })
    })
  }
}
