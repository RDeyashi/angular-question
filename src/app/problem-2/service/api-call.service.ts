import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http: HttpClient) { }

  getUserByName(name: string): Observable<string> {
    const params = {
      q: name
    }
    return this.http.get<string>('https://dummyjson.com/users/search', { params })
  }
}
