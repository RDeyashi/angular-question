import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchUserService {

  constructor(private http: HttpClient) { }

  fetchUser(limit:number, skpi:number): Observable<any>{
    let params= {
      limit: limit,
      skip: skpi
    }
    return this.http.get<any>(`https://dummyjson.com/users`, {params})
  }
}
