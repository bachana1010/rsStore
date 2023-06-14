import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AddUsers } from 'src/interfaces/users';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  endpoint = 'http://localhost:5043/'

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.endpoint + 'api/User');
  }

  AddUser(task: AddUsers): Observable<any> {
    return this.http.post(this.endpoint + 'api/User', task);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.endpoint}api/User/${id}`);
  }
  
  
}


