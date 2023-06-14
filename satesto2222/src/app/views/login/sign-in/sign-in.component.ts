import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup | any;
  sendLoginform: any;
  isAuthorized = false;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });
  }

  onFormSubmit(): void {
    console.log('Form submitted');
}


  onSubmit(form: FormGroup) {
    console.log('onSubmit triggered'); // add this line

    // if (!form.valid) {
    //   alert("Form is not valid. Please check your inputs.");
    //   return;
    // }

    this.sendLoginform = form.value;

    this.authService.loginUser(this.sendLoginform).subscribe(
      (response: any) => {
        alert("Logged in successfully");
        this.isAuthorized = true;
        let InformationToken = response.token;
        let informationUser = response.user;
        console.log(response);

        localStorage.setItem('Authorization',InformationToken);
        localStorage.setItem('username',informationUser.username);
        localStorage.setItem('UserRole',informationUser.role);

        this.router.navigateByUrl('/user') //Change this path to where you want to redirect after successful login
        this.loginForm.reset();
      },
      (error) => {
        alert("Login failed: " + error.statusText + ". Try again");
        this.loginForm.reset();
      }
    );
  }
}
