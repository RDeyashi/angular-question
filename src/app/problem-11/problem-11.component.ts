import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FetchUserService } from './service/fetch-user.service';

@Component({
  selector: 'app-problem-11',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './problem-11.component.html',
  styleUrl: './problem-11.component.scss',
  providers: [FetchUserService]
})
export class Problem11Component {
  constructor(private fetchUserS: FetchUserService) { }
  @ViewChild('observer') observerElement!: ElementRef;
  users: any[] = [];
  limit = 10;
  skip = 0;

  ngAfterViewInit(): void {
    this.loadUser();
    this.setupIntersectionObserver();
  }

  loadUser() {
    this.fetchUserS.fetchUser(this.limit, this.skip).subscribe((data: any) => {
      if (data) {
        this.users.push(...data.users);
        this.skip += this.limit
      }
    })
  }

  setupIntersectionObserver() {
    const observer = new IntersectionObserver(element => {
      if (element[0].isIntersecting) {
        this.loadUser();
      }
    }, { threshold: 1.0 });

    observer.observe(this.observerElement.nativeElement);
  }
}
