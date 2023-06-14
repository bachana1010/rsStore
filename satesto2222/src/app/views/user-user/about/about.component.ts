import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/services/user.service';
import { Users, UserApiResponse } from 'src/interfaces/users';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  UsersData: Users[] = [];

  constructor(private router: Router,
              private userService: UserService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("datadan")
    this.loadData()
  }

  loadData() {
    this.userService.getUsers().subscribe((response: UserApiResponse) => {
      console.log('esaa axali responsi', response);
      this.UsersData = response;  // your response is directly the array of users
      console.log(this.UsersData);
    });
  }

  deleteUser(item: any): void{
    if (confirm("Are you sure to delete " + item.username + "?")) {
      this.userService.deleteUser(item.id).subscribe(response => {
        this.loadData();
        console.log(response);
      });
    }
  }
}
