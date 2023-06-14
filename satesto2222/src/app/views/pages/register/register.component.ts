// import { Component, Renderer2 } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AuthService } from '../../../../services/auth.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.scss']
// })
// export class RegisterComponent {
  

//   public registrationForm: FormGroup | any;
//   public SendRegistrationForm: any = ""
//   public passwordFocused = false; 
//   public passwordVisible = false; 

//   constructor( 
//     private renderer: Renderer2,
//     private authService: AuthService,
//     private formBuilder: FormBuilder,
//     private router: Router,
//   ) { }

//   ngOnInit(): void {
//     this.registrationForm = this.formBuilder.group({
//       OrganizationName: ["", Validators.required],
//       Address: ["", Validators.required],
//       Email: ["", [Validators.required, Validators.email]],
//       FirstName: ["", Validators.required],
//       LastName: ["", Validators.required],
//       UserName: ["", Validators.required],
//       Password: ["", [Validators.required, Validators.minLength(6)]],
//       confirmPassword: ["", Validators.required]
//     });

//     this.renderer.setStyle(
//       document.body, 
//       'background', 
//       '#f0f0f0d5'
//     );
//   }

//   ngOnDestroy() {
//     // Clean up
//     this.renderer.removeStyle(document.body, 'background');
//   }

//   signUp(form: FormGroup) {
//     if (!form.valid) {
//       form.markAllAsTouched(); // this will trigger validation messages to show on all fields
//       return;
//     }
  
//     console.log(form.value);
//     this.SendRegistrationForm = form.value;
  
//     this.authService.registerUser(this.SendRegistrationForm).subscribe(
//       (res) => {
//         alert("Registered successfully");
//         this.router.navigateByUrl("/signin");
//         console.log(res);
//         form.reset();
//       },
//       (err) => {
//         console.log(err);
//         if (err.status === 400) {
//           if (err.error.message === "Email already exists.") {
//             alert("Registration failed: Email already registered");
//           } else if (err.error.message === "Username already taken") {
//             alert("Registration failed: Username already taken.");
//           }
//         } else {
//           alert("Registration failed: " + err.statusText + ". Try again");
//         }
//       }
//     );
//   } // This is where the extra bracket was
// }
