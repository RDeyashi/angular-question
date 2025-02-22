import { Component } from '@angular/core';
import { ApiCallService } from './service/api-call.service';
import { HttpClientModule } from '@angular/common/http';
import { debounceTime, tap } from 'rxjs';

@Component({
  selector: 'app-problem-8',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './problem-8.component.html',
  styleUrl: './problem-8.component.scss',
  providers: [ApiCallService]
})
export class Problem8Component {
  constructor(private apiService: ApiCallService) { }
  isLoading: boolean = false;
  apiData: any[] = []

  ngOnInit(): void {
    this.isLoading = true;
    this.apiService.getUser().subscribe({
      next: (result: any[]) => {
        if (result) {
          setTimeout(() => {
            this.isLoading = false;
            result.map((obj: any) => {
              this.apiData.push({
                name: obj.name,
                email: obj.email,
                phone: obj.phone
              })
            })
          }, 300)
        }
        //this.isLoading = false;
      },
      error: error => {
        console.error(error);
      }
    })
  }
}
