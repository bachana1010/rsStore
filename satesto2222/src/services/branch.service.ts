import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  endpoint = 'http://localhost:5043/'

  constructor(private http: HttpClient) { }
  
  getBranches(): Observable<any> {
    return this.http.get(this.endpoint + 'api/Branch');
  }
}
