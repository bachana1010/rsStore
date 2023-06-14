import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/services/user.service';
import { AddUsers } from 'src/interfaces/users';
import { BranchService } from 'src/services/branch.service';
import { GetBranch,BranchApiResponse } from 'src/interfaces/branch';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  myForm: FormGroup | any;
  branches: GetBranch[] = []
  branchesName: [] = []
  


  generatedPassword: string = ''; // Initialize your variable here to hold the generated password
  
  constructor(private fb: FormBuilder, 
              private userService: UserService,
              private branchService: BranchService,private snackBar: MatSnackBar) { }
  
  ngOnInit(): void {

    this.getBranches();
    
    this.myForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      userName: ["", Validators.required],
      password: [{value: '', disabled: true}], // remove Validators.required
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      role: ["", Validators.required],
      branchId: ["", Validators.required],
    })    
  }

  generatePassword() {
    const length = 8; // Define the length of the password
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // Define the characters to choose from
    let retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
  
    this.generatedPassword = retVal; // store the generated password
    this.myForm.controls['password'].setValue(retVal);  // display the password in the field
    this.myForm.controls['password'].disable();  // disable the field
  }
  
  addUser(data: AddUsers): void {  // Changed from form: FormGroup to data: AddUsers
    console.log(data)
    this.userService.AddUser(data).subscribe((res) => {
      console.log("pasuxi", res)
      console.log(data);
      this.myForm.reset();
      // Show snackbar here
    this.snackBar.open(res.message, 'Close', {
      duration: 3000,  // duration in milliseconds
    });
    })
  }

  onFormSubmit(form: FormGroup): void {
    const formValueWithPassword = { ...form.value, password: this.generatedPassword };
    
    this.addUser(formValueWithPassword);  // use this new object instead of form.value
  }

  getBranches():void{
    this.branchService.getBranches().subscribe((response: BranchApiResponse) => {
      console.log('esaa axali responsi', response);
  
      this.branches = response;  
      console.log(this.branches);
    });
   
  }
}
