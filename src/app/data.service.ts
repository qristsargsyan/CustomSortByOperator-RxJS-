import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8';
  constructor(private http:HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
