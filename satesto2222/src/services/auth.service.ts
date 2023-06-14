import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpoint = 'http://localhost:5043/'

  constructor(
    private http: HttpClient,
              private router: Router,
  ) { }

  registerUser(user: any ): Observable<any>{
    console.log('Sending request to:', this.endpoint + 'api/auth/register');

    return this.http.post(this.endpoint + "api/auth/register", user)

  }


  loginUser(user: any): Observable<any>{
    console.log('Sending request to:', this.endpoint + 'api/auth/login');
    return this.http.post(this.endpoint + "api/auth/login", user);
  }

  
  
  logoutUser(){
     localStorage.removeItem("Authorization")
     localStorage.removeItem("ID"); 

     this.router.navigate(["login"])
  }

  loggedIn(){
    return !!localStorage.getItem('Authorization')
  }
}
